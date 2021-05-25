$(() => {
    $('#street-map-toggle').on('click', () => {
        if ($('#street-map-toggle').html() === 'Street') {
            $('#street-map-toggle').html('Map');
        } else {
            $('#street-map-toggle').html('Street');
        }
    })
})