$(() => {
    var div = $("#poi-draggable").draggable({
        containment: "parent",
        drag: () => {
            $('h3').text('Left: ' + div.offset().left + ' - Top: ' + div.offset().top);
        }
    });

    $('#poi-draggable .card-header img').click((e) => {
        $('#poi-draggable').hide();
    });

    $('#collapsePOIOptions .card-body ul li:last-child').click((e) => {
        $('#poi-delete-draggable').show();
    });
});