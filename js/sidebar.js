$(() => {
    $('.cnt .cnt-settings .close-menu img').click((e) => {
        $('.cnt-settings').hide(50);
        $('.cnt .cnt-map #mobile-setting-bar').show();
        $('#poi-draggable').css({ 'left': '66px' });
        $('#poi-delete-draggable').css({ 'left': '246px' });
        $('#bookmarks-draggable').css({ 'left': '66px' });
    });

    $('.cnt .cnt-map #mobile-setting-bar div:first-child').click((e) => {
        $('.cnt-settings').show(50);
        $('.cnt .cnt-map #mobile-setting-bar').hide();
        $('#poi-draggable').css({ 'left': '20px' });
        $('#poi-delete-draggable').css({ 'left': '200px' });
        $('#bookmarks-draggable').css({ 'left': '20px' });
    });

    $('#collapsePOI li').not(':first').click((e) => {
        var text = $(e.target).text();
        $('#poi-draggable-header').text(text);
        $('#poi-delete-draggable-header').text('Are you sure you want to delete ' + text + '?');
        $('#poi-draggable').show();
    });
});