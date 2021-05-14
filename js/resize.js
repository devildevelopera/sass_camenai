$(() => {
    const resize_handler = document.getElementById("resize-handler");
    const img_sec = document.getElementsByClassName("img-sec")[0];
    const map_sec = document.getElementsByClassName("map-sec")[0];

    let m_pos;
    function resize(e) {
        const dy = e.y - m_pos;
        m_pos = e.y;
        img_sec.style.height = (parseInt(getComputedStyle(img_sec, '').height) + dy) + "px";
        map_sec.style.height = (parseInt(getComputedStyle(map_sec, '').height) - dy) + "px";
    }

    resize_handler.addEventListener("mousedown", function (e) {
        m_pos = e.y;
        document.addEventListener("mousemove", resize, false);
    }, false);

    document.addEventListener("mouseup", function () {
        document.removeEventListener("mousemove", resize, false);
    }, false);
});