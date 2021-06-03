var _setRange = (start, end) => {
    if (start && end) {
        $(".date-range-picker-input").val(start + ' to ' + end);
    } else {
        $(".date-range-picker-input").val('');
    }
}

$().ready(() => {
    $('.date-picker').dateRangePicker({
        calendarE1: '#calendar-div',
        setRange: _setRange
    });
});