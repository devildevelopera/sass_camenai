$(() => {
    $(".img-prev-next img:nth-child(2)").on('click', function(e) {
        if ($(this).attr('src') === 'imgs/1x/img-pause.png') {
            $(this).attr("src", "imgs/1x/img-play.png");
        } else {
            $(this).attr("src", "imgs/1x/img-pause.png");
        }
    });
});