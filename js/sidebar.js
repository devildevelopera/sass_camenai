$(() => {
    $('.cnt .cnt-map #menu-btn').hide();

    $('.cnt .cnt-settings .close-menu img').click((e) => {
        $('.cnt-settings').hide();
        $('.cnt .cnt-map #menu-btn').show();
        $('#poi-draggable').css('top', '75px');
        $('#poi-draggable').css('left', '20px');
        $('#bookmarks-draggable').css('top', '245px');
        $('#bookmarks-draggable').css('left', '20px');
    })

    $('.cnt .cnt-map #menu-btn').click((e) => {
        $('.cnt-settings').show();
        $('.cnt .cnt-map #menu-btn').hide();
        $('#poi-draggable').css('top', '20px');
        $('#poi-draggable').css('left', '20px');
        $('#bookmarks-draggable').css('top', '190px');
        $('#bookmarks-draggable').css('left', '20px');
    })
})