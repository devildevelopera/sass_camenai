$(() => {
    $(".img-prev-next img:nth-child(2)").on('click', () => {
        if ($(".img-prev-next img:nth-child(2)").attr('src') === 'imgs/1x/img-pause.png') {
            $(".img-prev-next img:nth-child(2)").attr("src", "imgs/1x/img-play.png");
        } else {
            $(".img-prev-next img:nth-child(2)").attr("src", "imgs/1x/img-pause.png");
        }
    });
});