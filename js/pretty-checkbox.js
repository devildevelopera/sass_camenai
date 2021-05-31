$(() => {

    setTimeout(() => {
        $(`.image-quality-horizontal-slider .slider.slider-horizontal .slider-handle.min-slider-handle.round`).show();
        $(`.image-quality-horizontal-slider .slider.slider-horizontal .slider-track`).css('background-image', 'url("imgs/SVG/vertical-line.svg"), url("imgs/SVG/vertical-line.svg"), url("imgs/SVG/vertical-line.svg"), url("imgs/SVG/vertical-line.svg"), url("imgs/SVG/vertical-line.svg"), url("imgs/SVG/vertical-line.svg"), url("imgs/SVG/vertical-line.svg"), url("imgs/SVG/vertical-line.svg"), url("imgs/SVG/vertical-line.svg"), url("imgs/SVG/vertical-line.svg"), url("imgs/SVG/vertical-line.svg")');
        $(`.image-quality-horizontal-slider .slider.slider-horizontal .tooltip`).show();

        $(`.gps-accuracy-horizontal-slider .slider.slider-horizontal .slider-handle.min-slider-handle.round`).show();
        $(`.gps-accuracy-horizontal-slider .slider.slider-horizontal .slider-track`).css('background-image', 'url("imgs/SVG/vertical-line.svg"), url("imgs/SVG/vertical-line.svg"), url("imgs/SVG/vertical-line.svg"), url("imgs/SVG/vertical-line.svg"), url("imgs/SVG/vertical-line.svg"), url("imgs/SVG/vertical-line.svg"), url("imgs/SVG/vertical-line.svg"), url("imgs/SVG/vertical-line.svg"), url("imgs/SVG/vertical-line.svg"), url("imgs/SVG/vertical-line.svg"), url("imgs/SVG/vertical-line.svg")');
        $(`.gps-accuracy-horizontal-slider .slider.slider-horizontal .tooltip`).show();
    }, 500);

    $('.image-filter-item .pretty input').on('click', (e) => {
        if (!e.target.checked) {
            $(`.${e.target.name}-horizontal-slider .slider.slider-horizontal .slider-handle.min-slider-handle.round`).hide();
            $(`.${e.target.name}-horizontal-slider .slider.slider-horizontal .slider-track`).css('background-image', 'url("imgs/SVG/vertical-line-hidden.svg"), url("imgs/SVG/vertical-line-hidden.svg"), url("imgs/SVG/vertical-line-hidden.svg"), url("imgs/SVG/vertical-line-hidden.svg"), url("imgs/SVG/vertical-line-hidden.svg"), url("imgs/SVG/vertical-line-hidden.svg"), url("imgs/SVG/vertical-line-hidden.svg"), url("imgs/SVG/vertical-line-hidden.svg"), url("imgs/SVG/vertical-line-hidden.svg"), url("imgs/SVG/vertical-line-hidden.svg"), url("imgs/SVG/vertical-line-hidden.svg")');
            $(`.${e.target.name}-horizontal-slider .slider.slider-horizontal .tooltip`).hide();
        } else {
            $(`.${e.target.name}-horizontal-slider .slider.slider-horizontal .slider-handle.min-slider-handle.round`).show();
            $(`.${e.target.name}-horizontal-slider .slider.slider-horizontal .slider-track`).css('background-image', 'url("imgs/SVG/vertical-line.svg"), url("imgs/SVG/vertical-line.svg"), url("imgs/SVG/vertical-line.svg"), url("imgs/SVG/vertical-line.svg"), url("imgs/SVG/vertical-line.svg"), url("imgs/SVG/vertical-line.svg"), url("imgs/SVG/vertical-line.svg"), url("imgs/SVG/vertical-line.svg"), url("imgs/SVG/vertical-line.svg"), url("imgs/SVG/vertical-line.svg"), url("imgs/SVG/vertical-line.svg")');
            $(`.${e.target.name}-horizontal-slider .slider.slider-horizontal .tooltip`).show();
        }
    });
});