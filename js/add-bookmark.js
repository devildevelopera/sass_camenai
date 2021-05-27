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

    $("#add-bookmark-folder").on('change', () => {
        $(".folder-name").html($("#add-bookmark-folder").val());
        $("#add-bookmark-folder").hide();
        $(".new-folder-name").val('');
        $(".new-folder-name").hide();
        $('#add-bookmark-expanded .card .card-body .submit-bookmark').css('opacity', 1);
        $('#add-bookmark-expanded .card .card-body div:nth-child(5)').css('opacity', 1);
    });

    $(".change-folder").on('click', () => {
        if ($("#add-bookmark-folder").is(":visible")) {
            $("#add-bookmark-folder").hide();
            $('#add-bookmark-expanded .card .card-body .submit-bookmark').css('opacity', 1);
            $('#add-bookmark-expanded .card .card-body div:nth-child(5)').css('opacity', 1);
        } else {
            $("#add-bookmark-folder").show();
            $(".new-folder-name").hide();
            $('#add-bookmark-expanded .card .card-body .submit-bookmark').css('opacity', 0.1);
            $('#add-bookmark-expanded .card .card-body div:nth-child(5)').css('opacity', 0.1);
        }
    });

    $(".new-folder").on('click', () => {
        $(".new-folder-name").show();
        $("#add-bookmark-folder").hide();
        $('#add-bookmark-expanded .card .card-body .submit-bookmark').css('opacity', 0.1);
        $('#add-bookmark-expanded .card .card-body div:nth-child(5)').css('opacity', 0.1);
    });

    $('.new-folder-name').keyup(function(e) {
        if (e.keyCode == 13) {
            $("#add-bookmark-folder").append(new Option($(".new-folder-name").val(), $(".new-folder-name").val()));
            if ($(".new-folder-name").val()) {
                $(".folder-name").html($(".new-folder-name").val());
            }
            $(".new-folder-name").val('');
            $(".new-folder-name").hide();
            $('#add-bookmark-expanded .card .card-body .submit-bookmark').css('opacity', 1);
            $('#add-bookmark-expanded .card .card-body div:nth-child(5)').css('opacity', 1);
        }
    });
});