$(() => {
    $("#add-bookmark-expanded .card .card-header").on("click", () => {
        if ($('#add-bookmark-expanded').css('height') === '38px') {
            $('#add-bookmark-expanded').css('height', '210px');
        } else {
            $('#add-bookmark-expanded').css('height', '38px');
        }

    });

    $('#add-bookmark-expanded .card .card-body .submit-bookmark').click((e) => {
        $('#add-bookmark-expanded').css('height', '38px');;
    });

    $("#add-bookmark-expanded .change-folder ul li").on('click', (e) => {
        $(".folder-name").html(e.target.innerHTML);
        $("#add-bookmark-expanded .change-folder ul li").removeClass('selected');
        e.target.className = 'selected';
        $(".new-folder-name").val('');
        $(".new-folder-name").hide();
        $('#add-bookmark-expanded .card .card-body .submit-bookmark').css('opacity', 1);
        $('#add-bookmark-expanded .card .card-body div:nth-child(4)').css('opacity', 1);
    });

    $(".new-folder").on('click', () => {
        $(".new-folder-name").show();
        $('#add-bookmark-expanded .card .card-body .submit-bookmark').css('opacity', 0.1);
        $('#add-bookmark-expanded .card .card-body div:nth-child(4)').css('opacity', 0.1);
    });

    $('.new-folder-name').keyup(function(e) {
        if (e.keyCode == 13) {
            var new_folder = $(".new-folder-name").val();
            $("#add-bookmark-expanded .change-folder ul li").removeClass('selected');
            $("#collapseAddBookmarkChangeFolder ul").append(`<li value="${new_folder}" class="selected">${new_folder}</li>`);
            if ($(".new-folder-name").val()) {
                $(".folder-name").html($(".new-folder-name").val());
            }
            $(".new-folder-name").val('');
            $(".new-folder-name").hide();
            $('#add-bookmark-expanded .card .card-body .submit-bookmark').css('opacity', 1);
            $('#add-bookmark-expanded .card .card-body div:nth-child(4)').css('opacity', 1);
        }
    });
});