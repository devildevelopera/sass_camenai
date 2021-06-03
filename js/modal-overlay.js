$(() => {
    $("#modal-overlay").on('click', () => {
        $("#setting-box-draggable").hide();
        $("#help-center-box-draggable").hide();
        $("#modal-overlay").hide();
    })
});