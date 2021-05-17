$().ready(() => {
    $('[data-toggle="tooltip"]').tooltip();

    var slider = new Slider("#brightness-vertical-slider", {
        orientation: 'vertical',
        reversed: true,
        formatter: function(value) {
            return 'Brightness: ' + value + '%';
        },
    });

    var slider = new Slider("#contrast-vertical-slider", {
        orientation: 'vertical',
        reversed: true,
        formatter: function(value) {
            return 'Contrast: ' + value + '%';
        },
    });
});