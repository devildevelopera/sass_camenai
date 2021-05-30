$().ready(() => {

    setTimeout(() => {
        $(".slider.slider-horizontal .tooltip.tooltip-main.top .tooltip-arrow").append('<div class="inner-triangle"></div>');
    }, 500);


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

    var slider = new Slider('#trash-horizontal-slider', {
        formatter: function(value) {
            return value + '%';
        },
    });

    var slider = new Slider('#reload-damage-horizontal-slider', {
        formatter: function(value) {
            return value + '%';
        },
    });

    var slider = new Slider('#vegetation-horizontal-slider', {
        formatter: function(value) {
            return value + '%';
        },
    });

    var slider = new Slider('#street-hurniture-horizontal-slider', {
        formatter: function(value) {
            return value + '%';
        },
    });

    var slider = new Slider('#road-paint-horizontal-slider', {
        formatter: function(value) {
            return value + '%';
        },
    });

    var slider = new Slider('#canals-horizontal-slider', {
        formatter: function(value) {
            return value + '%';
        },
    });

    var slider = new Slider('#faces-horizontal-slider', {
        formatter: function(value) {
            return value + '%';
        },
    });

    var slider = new Slider('#license-plates-horizontal-slider', {
        formatter: function(value) {
            return value + '%';
        },
    });

    var slider = new Slider('#graffiti-horizontal-slider', {
        formatter: function(value) {
            return value + '%';
        },
    });
});