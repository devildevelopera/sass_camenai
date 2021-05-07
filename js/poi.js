$(() => {
    var div = $("#poi-delete-draggable").draggable({
        containment: "parent",
        drag: () => {
            $('h3').text('Left: ' + div.offset().left + ' - Top: ' + div.offset().top);
        }
    });

    $('#poi-draggable .card-header i').click((e) => {
        $('#poi-draggable').hide();
    })

    $('#collapsePOIOptions .card-body ul li:last-child').click((e) => {
        $('#poi-delete-draggable').show();
    });
});