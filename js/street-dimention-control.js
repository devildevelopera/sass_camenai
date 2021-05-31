$(() => {
    $('#street-dimension-control div:first-child').on('click', function() {
        if ($(this).html() === 'Street') {
            $(this).html('Map');
        } else {
            $(this).html('Street');
        }
    });

    $('#street-dimension-control div:nth-child(2)').on('click', function() {
        if ($(this).attr("class") === 'selected') {
            $(this).removeClass('selected');
        } else {
            $(this).addClass('selected');
        }
    });

    $('#street-dimension-control div:nth-child(3)').on('click', function() {
        if ($(this).attr("class") === 'selected') {
            $(this).removeClass('selected');
        } else {
            $(this).addClass('selected');
        }
    });

    $('#street-dimension-control div:last-child').on('click', function() {
        if ($(this).attr("class") === 'selected') {
            $(this).removeClass('selected');
        } else {
            $(this).addClass('selected');
        }
    });
})