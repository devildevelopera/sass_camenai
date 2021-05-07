$(() => {
    var div = $("#poi-draggable").draggable({
        containment: "parent",
        drag: () => {
            $('h3').text('Left: ' + div.offset().left + ' - Top: ' + div.offset().top);
        }
    });

    $('#collapsePOI li').click((event) => {
        var text = $(event.target).text();
        $('#poi-draggable-header').text(text);
        $('#poi-draggable').show();
    });

    $('#poi-draggable .card-header i').click((e) => {
        $('#poi-draggable').hide();
    })
});