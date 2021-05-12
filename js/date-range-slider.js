$(() => {
    var valMap = [];
    for (var i = 0; i < 31; i++) {
        valMap.push(i);
    }

    $("#d-slider").slider({
            max: valMap.length - 1,
            slide: (event, ui) => {
                $("#date-range-value").val(valMap[ui.value]);
            }
        })
        .each(() => {
            var opt = $("#d-slider").data().uiSlider.options;

            var vals = opt.max - opt.min;

            var arrayLength = valMap.length;

            for (var i = 0; i < arrayLength; i++) {
                var el = $('<span></span>').css('left', i / vals * 100 + '%');

                $("#d-slider").append(el);

            }

        });
});