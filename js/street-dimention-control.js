$(() => {
    $('#street-map-toggle').on('click', function() {
        if ($(this).html() === 'Street') {
            $(this).html('Map');
        } else {
            $(this).html('Street');
        }
    })
})