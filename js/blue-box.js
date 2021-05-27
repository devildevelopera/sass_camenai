$(() => {
    var div = $("#blue-box-draggable").draggable({
        containment: "parent",
        drag: () => {
            $('h3').text('Left: ' + div.offset().left + ' - Top: ' + div.offset().top);
        }
    });

    $('#blue-button-control').click((e) => {
        if ($('#blue-box-draggable').css('height') === '0px') {
            $('#blue-box-draggable').css('height', '123.57px');
        } else {
            $('#blue-box-draggable').css('height', '0');
        }
    });

    $('#blue-box-draggable div:last-child img:first-child').click((e) => {
        $('#blue-box-draggable').css('height', '0');
    });

});