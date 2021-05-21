$(() => {

    var $body = $('body');

    // initialize date converter
    let d = new Date();
    let today = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
    // disable autocomplete
    $('form').attr('autocomplete', 'off');

    // give each calendar instance a unique id
    var cal_no = 1;
    var cal_id = '';

    // set default date to this month
    var this_year = d.getFullYear();
    var this_month = (d.getMonth() + 1);

    // calendar config
    var start_year = 2000;
    var end_year = 2098;

    // is this single datepicker
    var single_datepicker = 0;

    // calendar ui selector
    var $year_select = '';
    var $month_select = '';
    var $days_container = '';

    // for multiple selection
    var user_selected_dates = []; // this will hold all the user selected dates
    var last_captured_date = ''; // get last captured date, will be used to select days in multiple selection
    var input_field_name = '';

    // show different message according to os
    var os = 'win';
    var $selector = ''; // currently active selector
    var $form = ''; // parent form of selected selector

    var sel_input;
    var params;

    $.fn.dateRangePicker = (_params) => {
        params = _params;
        // detect OS
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0) {
            os = 'mac';
        }

        // give calendar a unique id
        $(this).each(function() {

            let $this = $(this);

            // give unique id to each calendar instance
            $(this).attr('data-cal_id', 'cal-' + cal_no);
            cal_no++;

            // add common class to all input fields
            $(this).addClass('andp-date-picker');

            // this will run only once
            // generate input hidden fields if date value already exist
            var default_value = $.trim($(this).attr('value'));

            let data_single = $(this).data('single');

            if (data_single == true || data_single == 1) {
                single_datepicker = 1;
            } else {
                single_datepicker = 0;
            }

            if (default_value && !single_datepicker) {

                // set form
                $form = $(this).parents('form');

                // set calendar id
                cal_id = $(this).data('cal_id');

                // this will be used to generate hidden input fields with same input name
                input_field_name = $(this).attr('name');

                let default_dates = default_value.split(',');
                default_dates.forEach(function(item, index) {

                    generate_hidden_input_fields(item.trim());
                })

                if ($(this).data('show_all_dates') != true) {

                    if (default_dates.length > 1) {
                        output_msg = default_dates.length + ' dates selected';
                    } else {
                        output_msg = default_dates[0];
                    }

                    // show message to main selector field
                    $(this).attr('value', output_msg);

                } else {

                    // "data-show_all-dates" = true

                    if (!$this.is('input')) {
                        // input type is not "input".
                        // show all default values into selected container.

                        let default_dates = default_value.split(',');
                        let temp_markup = '<span>' + default_dates.join('</span><span>') + '</span>';
                        $this.append(temp_markup);

                    }
                }

            }
        })


        // when user clicks in input / selector field
        $(() => {

            // update globally.
            sel_input = this;

            user_selected_dates = [];
            $selector = $(this);

            data_single = $(this).data('single');

            if (data_single == true || data_single == 1) {
                single_datepicker = 1;
            } else {
                single_datepicker = 0;
            }

            // set calendar id
            cal_id = $(this).data('cal_id');

            // initiate calendar ui
            init(this);

            if (single_datepicker) {

                // inline calendar
                selected_date = format_date_yyyy_mm_dd($(this).val());

                // add this date into selected dates arary

                // switch calendar to selected month and year
                if (selected_date.length > 0) {
                    older_date_ar = selected_date.split('-');

                    $month_select.val(older_date_ar[1]).change();
                    $year_select.val(older_date_ar[0]).change();

                    select_date(selected_date);

                } else {

                    // select default date
                    select_date(today, true);

                }

            } else {
                // multi select calendar

                $form = $(this).parents('form');

                // this will be used to generate hidden input fields with same input name
                input_field_name = $(this).attr('name');

                if (input_field_name) {
                    // remove name attr from selector
                    $(this).removeAttr('name', '').attr('data-name', input_field_name);
                } else {
                    // input_field_name is missing
                    // get it from data-name
                    input_field_name = $(this).attr('data-name');
                }

                var $hidden_publish_dates = $('input.andp-hidden-dates[data-cal_id="' + cal_id + '"]');
                var total_hidden_dates = $hidden_publish_dates.length;

                if (total_hidden_dates > 0) {

                    if (total_hidden_dates == 1) {

                        selected_date = format_date_yyyy_mm_dd($hidden_publish_dates.eq(0).val());
                        older_date_ar = selected_date.split('-');

                        $month_select.val(older_date_ar[1]).change();
                        $year_select.val(older_date_ar[0]).change();

                        // mark all selected dates as selexted in calendar ui.
                        select_date(selected_date);
                    } else {

                        // last selected date
                        older_date = $('input.andp-hidden-dates[data-cal_id="' + cal_id + '"]');
                        let total_older_date = older_date.length;
                        older_date = format_date_yyyy_mm_dd(older_date.eq((total_older_date - 1)).val());

                        // switch calendar to last month and year of selected date
                        if (older_date && older_date.length > 0) {
                            older_date_ar = older_date.split('-');

                            $month_select.val(older_date_ar[1]).change();
                            $year_select.val(older_date_ar[0]).change();
                        }

                        $hidden_publish_dates.each(function() {

                            let sel_date = format_date_yyyy_mm_dd($(this).val());

                            // mark all selected dates as selexted in calendar ui.
                            select_date(sel_date);

                        })


                    }

                } else {
                    // select default date
                    select_date(today, true);
                }

            }

        })


        // update days when month or year is changed
        $body.on('change', '.andp-month-select, .andp-year-select', () => {
            generate_days();
        });

    };

    // change months on button click
    $body.on('click', '.andp-datepicker-container.open .andp-change-months', (event) => {
        // show next month
        selected_month = parseInt($month_select.val());
        selected_year = parseInt($year_select.val());

        if ($(this).hasClass('andp-next')) {
            // next month
            selected_month = selected_month + 1;
            if (selected_month > 12) {
                selected_month = 1;
                selected_year = selected_year + 1;

                if (selected_year > end_year) {
                    selected_year = end_year;
                    selected_month = 12;
                }
            }
        } else {
            // previous month
            selected_month = selected_month - 1;
            if (selected_month < 1) {
                selected_month = 12;
                selected_year = selected_year - 1;

                if (selected_year < start_year) {
                    selected_year = start_year;
                    selected_month = 1;
                }
            }
        }

        if (selected_month < 10) {
            selected_month = '0' + selected_month;
        }

        if (selected_year < 10) {
            selected_year = '0' + selected_year;
        }

        $month_select.val(selected_month).change();
        $year_select.val(selected_year).change();

    });


    // if clicked in days when datepicker is open
    $body.on('click', '.andp-days-numbers .day', function(event) {

        selected_day = $(this).text();
        selected_date = $(this).data('date');

        var $sel_calendar = $('.andp-datepicker-container[data-cal_id="' + cal_id + '"]');


        // disable shift or ctrl key on single_datepicker
        if (user_selected_dates.length == 0 || user_selected_dates.length != 1) {
            user_selected_dates = [];
            $sel_calendar.find('.andp-column .day').removeClass('selected');

            // select date function
            select_date(selected_date);

            $sel_calendar.find('.andp-info').hide();

            // update_sel_date_in_ui();
        } else {
            selected_date = $(this).data('date');
            last_captured_date = user_selected_dates[0];

            // get older date
            var smaller_date = (find_older_date(selected_date, last_captured_date)) ? last_captured_date : selected_date;
            var next_date = smaller_date;

            var days_difference = get_days_difference(selected_date, last_captured_date);
            // reset all captured dates
            user_selected_dates = [];

            $sel_calendar.find('.andp-column .day').removeClass('selected');

            select_date(next_date);

            for (i = 1; i <= days_difference; i++) {

                next_date = get_next_day(next_date);
                select_date(next_date);
            }
        }

        // let other application get selected date through custom event.
        $("document").trigger("andp_date_selected", [user_selected_dates, sel_input]);

    })


    // insert/update date only if appy-date button was clicked
    $body.on('click', '.andp-datepicker-container.open .apply-date', () => {
        if (user_selected_dates.length >= 2) {
            params.setRange(user_selected_dates[0], user_selected_dates[user_selected_dates.length - 1]);
        } else {
            params.setRange(null, null);
        }
    })


    var format_date_yyyy_mm_dd = (date) => {
        let date_ar = date.split('-');
        let new_date = date_ar[0] + '-';
        new_date += (date_ar[1].length == 1) ? '0' + date_ar[1] : date_ar[1];
        new_date += '-';
        new_date += (date_ar[2].length == 1) ? '0' + date_ar[2] : date_ar[2];

        return new_date;

    }

    var init = (this_sel) => {

        // close other instance of calendar
        $('.andp-datepicker-container').removeClass('open').hide();

        // check if calendar ui has already been generated for selected cal_id
        var $sel_calendar = $('.andp-datepicker-container[data-cal_id="' + cal_id + '"]');
        if ($sel_calendar.length > 0) {
            $year_select = $sel_calendar.find('.andp-year-select');
            $month_select = $sel_calendar.find('.andp-month-select');
            $days_container = $sel_calendar.find('.andp-days-numbers');
            $sel_calendar.addClass('open').show();

            fix_calendar_alignment();
            return;
        }

        var template = '<div class="andp-datepicker-container" data-cal_id="' + cal_id + '" >';
        template += '<div class = "andp-header">';
        template += '<button type = "button"  class = "andp-prev andp-change-months"> &#10094; </button>';
        template += '<select class = "andp-month-select"> </select>';
        template += '<select class = "andp-year-select"> </select>';
        template += '<button type = "button" class = "andp-next andp-change-months"> &#10095; </button> ';
        template += '</div>';
        template += '<div class="andp-body">';
        template += '<div class = "andp-days-names"> <div> SUN </div> <div> MON </div> <div> TUE </div> <div> WED </div> <div> THU </div> <div> FRI </div> <div> SAT </div> </div>';
        template += '<div class = "andp-days-numbers"> </div>';

        if (!single_datepicker) {
            if (os == 'mac') {
                control_key = 'CMD';
            } else {
                control_key = 'CTRL';
            }
            template += '<div class="andp-info" style="display:none"><i class="mdi mdi-information text-primary"></i> Press <strong>' + control_key + '</strong> or <strong>Shift</strong> key for multiple selection </div>';
        }
        template += '<div class="andp-action-btns">';

        if (!single_datepicker) {
            template += '<button type="button" class="apply-date" data-cal_id="' + cal_id + '">Apply</button>';
        }
        template += '</div>';
        template += '</div>';
        template += '</div>';

        // insert into DOM
        $(params.calendarE1).html(template);

        // re-initiate var, wont work otherwise
        $sel_calendar = $('.andp-datepicker-container[data-cal_id="' + cal_id + '"]');

        $year_select = $sel_calendar.find('.andp-year-select');
        $month_select = $sel_calendar.find('.andp-month-select');
        $days_container = $sel_calendar.find('.andp-days-numbers');

        // add month into month select
        append_html = '<option value = "01" ' + (('01' == this_month) ? 'selected' : ' ') + ' > Jan </option>';
        append_html += '<option value = "02" ' + (('02' == this_month) ? 'selected' : '') + ' > Feb </option>';
        append_html += '<option value = "03" ' + (('03' == this_month) ? 'selected' : '') + ' > Mar </option>';
        append_html += '<option value = "04" ' + (('04' == this_month) ? 'selected' : '') + ' > Apr </option>';
        append_html += '<option value = "05" ' + (('05' == this_month) ? 'selected' : '') + ' > May </option>';
        append_html += '<option value = "06" ' + (('06' == this_month) ? 'selected' : '') + ' > Jun </option>';
        append_html += '<option value = "07" ' + (('07' == this_month) ? 'selected' : '') + ' > Jul </option>';
        append_html += '<option value = "08" ' + (('08' == this_month) ? 'selected' : '') + ' > Aug </option>';
        append_html += '<option value = "09" ' + (('09' == this_month) ? 'selected' : '') + ' > Sep </option>';
        append_html += '<option value = "10" ' + (('10' == this_month) ? 'selected' : '') + ' > Oct </option> ';
        append_html += '<option value = "11" ' + (('11' == this_month) ? 'selected' : '') + ' > Nov </option>';
        append_html += '<option value = "12" ' + (('12' == this_month) ? 'selected' : '') + ' > Dec </option>';

        $month_select.append(append_html);

        // add year into year select
        for (i = start_year; i <= end_year; i++) {
            append_html = '<option value="' + i + '"';
            if (i == this_year) {
                append_html += ' selected';
            }
            append_html += '>' + i + '</option>';
            $year_select.append(append_html);
        }

        generate_days();

        $('.andp-datepicker-container[data-cal_id="' + cal_id + '"]').addClass('open');

        fix_calendar_alignment();

    }

    var fix_calendar_alignment = () => {

        // fix calendar layout and position in dom
        var elem_pos = $selector.offset();
        var elem_height = $selector.outerHeight();

        var document_width = $(window).width();
        var selector_width = $selector.outerWidth();
        var calendar_width = $('.andp-datepicker-container').outerWidth();
        if (elem_pos) {
            if (calendar_width + elem_pos.left + 10 > document_width) {
                var right_offset = document_width - (elem_pos.left + selector_width);
                $('.andp-datepicker-container[data-cal_id="' + cal_id + '"]').css({
                    'top': elem_pos.top + elem_height,
                    'right': right_offset,
                    'left': 'inherit'
                });
            } else {
                $('.andp-datepicker-container[data-cal_id="' + cal_id + '"]').css({
                    'top': elem_pos.top + elem_height,
                    'left': elem_pos.left,
                    'right': 'inherit'
                });
            }
        }

    }

    var generate_days = () => {

        month = $month_select.val();
        year = $year_select.val();

        $days_container.html('');

        var month_start_day = new Date(year, parseInt(month) - 1, 1).getDay() + 1;
        console.log('m', month);
        console.log('y', year);
        console.log(month_start_day);
        var total_days_in_selected_month = new Date(year, month, 0).getDate();

        append_html = '';
        var y = 1; // year
        var j = 1;
        var k = parseInt(month_start_day) - 2;
        var l = 1;
        for (i = 1; i <= 42; i++) {

            last_month = parseInt(month) - 1;
            last_year = parseInt(year);

            if (last_month < 1) {
                last_month = 12;
                last_year = last_year - 1;

                if (last_year < start_year) {
                    last_year = start_year;
                    last_month = 1;
                }

            }

            next_month = parseInt(month) + 1;
            next_year = parseInt(year);

            var total_days_in_last_month = new Date(last_year, last_month, 0).getDate();
            console.log('last-month-days', total_days_in_last_month)
            if (y == 1) {
                append_html += '<div class="andp-column">';
            }

            if (i < month_start_day) {
                append_html += '<div class="old-dates"> ' + parseInt(total_days_in_last_month - k) + ' </div>';
                k = k - 1;
            } else {
                if (j <= total_days_in_selected_month) {

                    let day = (j < 10 ? '0' + j : j);
                    let proper_date = year + '-' + month + '-' + day;
                    let ar_index = user_selected_dates.indexOf(proper_date);

                    // ( ( ar_index >= 0 ) ? ' selected' : '' ) = mark selected days as selected, even after calendar close or year/month change.
                    append_html += '<div class="day' + ((ar_index >= 0) ? ' selected' : '') + '" data-date="' + proper_date + '">' + j + '</div>';
                    j++;
                } else {
                    append_html += '<div  class="old-dates"> ' + l + '</div>';
                    l++;
                }
            }

            if (y == 7) {
                append_html += '</div>';
                y = 0;
            }

            y++;

        }

        $days_container.append(append_html);
    }

    var get_days_difference = (date_1, date_2) => {

        date_1 = date_1.split('-');
        date_2 = date_2.split('-');
        var d1 = new Date(date_1[0], date_1[1], date_1[2]);
        var d2 = new Date(date_2[0], date_2[1], date_2[2]);
        var diff = (d1 - d2) / (24 * 60 * 60 * 1000);
        return Math.abs(diff);
    }

    var find_older_date = (date_1, date_2) => {
        date_1 = date_1.split('-');
        date_2 = date_2.split('-');

        var firstDate = new Date(date_1[0], date_1[1], date_1[2]);
        var secondDate = new Date(date_2[0], date_2[1], date_2[2]);

        if (firstDate > secondDate) {
            return 1;
        } else {
            return false;
        }
    }

    var get_next_day = (date_1) => {
        date_1 = date_1.split('-');

        year = parseInt(date_1[0]);
        month = parseInt(date_1[1]);

        var days_in_month = parseInt(new Date(year, month, 0).getDate());

        day = parseInt(date_1[2]) + 1;
        if (day > days_in_month) {
            day = 1;
            month = month + 1;

            if (month > 12) {
                month = 1;
                year = year + 1;
            }
        }

        return year + '-' + month + '-' + day;
    }

    var select_date = (selected_date, soft_select = false) => {

        selected_date = format_date_yyyy_mm_dd(selected_date);

        var ar_index = user_selected_dates.indexOf(selected_date); // check if selected_date already exists in user_selected_date
        var $sel_calendar = $('.andp-datepicker-container[data-cal_id="' + cal_id + '"]');
        var $this = $sel_calendar.find('.day[data-date="' + selected_date + '"]');

        if (soft_select) {
            $this.addClass('soft-select');
        } else {

            if (ar_index < 0) {
                // date does not exist in  user_selected_dates array
                // add selected date into user_selected_dates array
                user_selected_dates.push(selected_date);

                // mark this day as selected
                $this.addClass('selected');
            } else {
                // date already added
                // remove this date from array
                user_selected_dates.splice(ar_index, 1);

                // mark as not selected
                $this.removeClass('selected');

            }
        }
    }

    var generate_hidden_input_fields = (value) => {
        $form.append('<input class="andp-hidden-dates" type="hidden" data-cal_id="' + cal_id + '" name="' + input_field_name + '[]" value="' + value + '">');
    };

});