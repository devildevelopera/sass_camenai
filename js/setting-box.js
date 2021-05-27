$(() => {
    var div = $("#setting-box-draggable").draggable({
        containment: "parent",
        drag: () => {
            $('h3').text('Left: ' + div.offset().left + ' - Top: ' + div.offset().top);
        }
    });

    $("#setting-green-btn").on('click', () => {
        if ($('#setting-box-draggable').is(":visible")) {
            $("#setting-box-draggable").hide(100);
        } else {
            $("#setting-box-draggable").show(100);
        }
    });

    $("#setting-box-draggable >div:first-child div:last-child img").on('click', () => {
        $("#setting-box-draggable").hide(100);
    });
});