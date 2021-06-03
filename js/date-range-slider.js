var _customerSelect = function() {
    var x, i, j, l, ll, selElmnt, a, b, c;
    /* Look for any elements with the class "date-range-select": */
    var initFun = function() {
        l = x.length;
        for (i = 0; i < l; i++) {
            selElmnt = x[i].getElementsByTagName("select")[0];
            ll = selElmnt.length;
            /* For each element, create a new DIV that will act as the selected item: */
            a = document.createElement("DIV");
            a.setAttribute("class", "select-selected");
            a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
            x[i].appendChild(a);
            /* For each element, create a new DIV that will contain the option list: */
            b = document.createElement("DIV");
            b.setAttribute("class", "select-items select-hide");
            for (j = 1; j < ll; j++) {
                /* For each option in the original select element,
                create a new DIV that will act as an option item: */
                c = document.createElement("DIV");
                c.innerHTML = selElmnt.options[j].innerHTML;
                c.addEventListener("click", function(e) {
                    /* When an item is clicked, update the original select box,
                    and the selected item: */
                    var y, i, k, s, h, sl, yl;
                    s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                    sl = s.length;
                    h = this.parentNode.previousSibling;
                    for (i = 0; i < sl; i++) {
                        if (s.options[i].innerHTML == this.innerHTML) {
                            s.selectedIndex = i;
                            h.innerHTML = this.innerHTML;
                            y = this.parentNode.getElementsByClassName("same-as-selected");
                            yl = y.length;
                            for (k = 0; k < yl; k++) {
                                y[k].removeAttribute("class");
                            }
                            this.setAttribute("class", "same-as-selected");
                            break;
                        }
                    }
                    h.click();

                    renderDateRangeSlider(y[0].innerHTML);
                });
                b.appendChild(c);
            }
            x[i].appendChild(b);
            a.addEventListener("click", function(e) {
                /* When the select box is clicked, close any other select boxes,
                and open/close the current select box: */
                e.stopPropagation();
                closeAllSelect(this);
                this.nextSibling.classList.toggle("select-hide");
                this.classList.toggle("select-arrow-active");
            });
        }
    }

    var closeAllSelect = function(elmnt) {
        /* A function that will close all select boxes in the document,
        except the current select box: */
        var x, y, i, xl, yl, arrNo = [];
        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");
        xl = x.length;
        yl = y.length;
        for (i = 0; i < yl; i++) {
            if (elmnt == y[i]) {
                arrNo.push(i)
            } else {
                y[i].classList.remove("select-arrow-active");
            }
        }
        for (i = 0; i < xl; i++) {
            if (arrNo.indexOf(i)) {
                x[i].classList.add("select-hide");
            }
        }
    }

    var renderDateRangeSlider = (type) => {
        var step_num = 31;
        var mon_str = (new Date().getMonth() + 1).toString().length === 1 ? '0' + (new Date().getMonth() + 1) : new Date().getMonth() + 1;

        switch (type) {
            case 'Day':
                step_num = 31;
                $("#date-range-value span").html(['01', mon_str, new Date().getFullYear()].join('-'));
                break;
            case 'Week':
                step_num = 5;
                // $("#date-range-value span").html('01');
                break;
            case 'Month':
                step_num = 12;
                // $("#date-range-value span").html('01');
                break;
            default:
                break;
        }

        var valMap = [];
        for (var i = 0; i < step_num; i++) {
            valMap.push(i);
        }

        $("#d-slider").children().not(':first').remove();

        $("#d-slider").slider({
                max: valMap.length - 1,
                slide: (event, ui) => {
                    if (type === "Day") {
                        var input_val = valMap[ui.value] + 1;
                        if (input_val.toString().length === 1) {
                            input_val = '0' + input_val;
                        }
                        $("#date-range-value span").html([input_val, mon_str, new Date().getFullYear()].join('-'));
                    } else if (type === 'Week') {
                        var input_val = valMap[ui.value] + 1;
                        if (input_val.toString().length === 1) {
                            input_val = '0' + input_val;
                        }
                        // $("#date-range-value span").html(input_val);
                    } else if (type === 'Month') {
                        var input_val = valMap[ui.value] + 1;
                        if (input_val.toString().length === 1) {
                            input_val = '0' + input_val;
                        }
                        // $("#date-range-value span").html(input_val);
                    }
                }
            })
            .each(() => {
                var opt = $("#d-slider").data().uiSlider.options;

                var vals = opt.max - opt.min;

                var arrayLength = valMap.length;

                for (var i = 0; i < arrayLength; i++) {
                    var el = $('<span></span>').css('left', `calc(${i / vals * 100 + '%'} + 9px)`);

                    $("#d-slider").append(el);

                }

            });
    }

    /* If the user clicks anywhere outside the select box,
    then close all select boxes: */
    return {
        init: function() {
            x = document.getElementsByClassName("date-range-select");
            initFun();
            document.addEventListener("click", closeAllSelect);

            renderDateRangeSlider('Day');
        }
    }
}();

$(() => {
    _customerSelect.init();
});