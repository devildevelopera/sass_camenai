$(() => {
    var div = $("#poi-draggable").draggable({
        containment: "parent",
        drag: () => {
            $('h3').text('Left: ' + div.offset().left + ' - Top: ' + div.offset().top);
        }
    });

    $('#poi-delete-draggable .card .card-body button').click((e) => {
        $('#poi-delete-draggable').hide();
    });
});