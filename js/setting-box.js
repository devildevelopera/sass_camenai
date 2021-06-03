$(() => {
    var div = $("#setting-box-draggable").draggable({
        containment: "parent",
        drag: () => {
            $('h3').text('Left: ' + div.offset().left + ' - Top: ' + div.offset().top);
        }
    });

    $(".hdr-menu ul li:nth-child(2) img").on('click', () => {
        if ($('#setting-box-draggable').is(":visible")) {
            $("#setting-box-draggable").hide();
            $("#modal-overlay").hide();
        } else {
            $("#setting-box-draggable").show();
            $("#modal-overlay").show();
        }
    });

    $("#setting-box-draggable >div:first-child div:last-child img").on('click', () => {
        $("#setting-box-draggable").hide();
        $("#modal-overlay").hide();

    });

    $("#setting-box-draggable >div:last-child button").on('click', () => {
        $("#setting-box-draggable").hide();
        $("#modal-overlay").hide();
    });
});