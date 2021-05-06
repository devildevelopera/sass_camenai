$(function() {
    var div = $("#draggable").draggable({
        containment: "parent",
        drag: function() {
            $('h3').text('Left: ' + div.offset().left + ' - Top: ' + div.offset().top);
        }
    });
});