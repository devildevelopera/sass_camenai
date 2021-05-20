var _setRange = function(start, end) {
    if (start && end) {
        $(".date-range-picker-input").val(start + ' ~ ' + end);
    }
}
jQuery(document).ready(function() {
    $('.date-picker').nepaliDatePicker({
        calendarE1: '#calendar-div',
        setRange: _setRange
    });
})