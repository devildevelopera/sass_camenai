$(() => {
    $("#on-off-control").first().on('click', () => {
        if ($("#on-off-control div:last-child").html() === 'OFF') {
            $("#on-off-control div:last-child").html('ON');
        } else {
            $("#on-off-control div:last-child").html('OFF');
        }
    });
});