$().ready(() => {
    $('[data-toggle="tooltip"]').tooltip();

    var slider = new Slider("#image-quality-horizontal-slider", {
        formatter: function(value) {
            return value + '%';
        },
    });

    var slider = new Slider('#gps-accuracy-horizontal-slider', {
        formatter: function(value) {
            return value + '%';
        },
    });
});