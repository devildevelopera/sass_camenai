$(() => {
    var div = $("#bookmarks-draggable").draggable({
        containment: "parent",
        drag: () => {
            $('h3').text('Left: ' + div.offset().left + ' - Top: ' + div.offset().top);
        }
    });

    $('#bookmarks').click((e) => {
        if ($('#bookmarks-draggable').is(":visible")) {
            $('#bookmarks-draggable').hide();
        } else {
            $('#bookmarks-draggable').show();
        }
    });

    $('#bookmarks-draggable .card-header i').click((e) => {
        $('#bookmarks-draggable').hide();
    })
});