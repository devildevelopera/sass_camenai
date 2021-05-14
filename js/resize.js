$(() => {
    const BORDER_SIZE = 4;
    const panel = document.getElementById("right_panel");

    let m_pos;
    function resize(e) {
        const dy = e.y - m_pos;
        m_pos = e.y;
        panel.style.height = (parseInt(getComputedStyle(panel, '').height) + dy) + "px";
    }

    panel.addEventListener("mousedown", function (e) {
        if ((parseInt(getComputedStyle(panel, '').height) - e.offsetY < BORDER_SIZE)) {
            m_pos = e.y;
            document.addEventListener("mousemove", resize, false);
        }
    }, false);

    document.addEventListener("mouseup", function () {
        document.removeEventListener("mousemove", resize, false);
    }, false);
});