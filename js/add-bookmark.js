$(() => {
    var div = $("#add-bookmark-draggable").draggable({
        containment: "parent",
        drag: () => {
            $('h3').text('Left: ' + div.offset().left + ' - Top: ' + div.offset().top);
        }
    });

    $("#add-bookmark-control").on("click", () => {
        if ($('#add-bookmark-draggable').is(":visible")) {
            $('#add-bookmark-draggable').hide();
        } else {
            $('#add-bookmark-draggable').show();
        }
    });

    $('#add-bookmark-draggable .card .card-body .submit-bookmark').click((e) => {
        $('#add-bookmark-draggable').hide();
    });

    $("#add-bookmark-folder").on('change', () => {
        $(".folder-name").html($("#add-bookmark-folder").val());
        $("#add-bookmark-folder").hide();
        $(".new-folder-name").val('');
        $(".new-folder-name").hide();
    });

    $(".change-folder").on('click', () => {
        $("#add-bookmark-folder").show();
    });

    $(".new-folder").on('click', () => {
        $(".new-folder-name").show();
    });

    $('.new-folder-name').keyup(function(e) {
        if (e.keyCode == 13) {
            $("#add-bookmark-folder").append(new Option($(".new-folder-name").val(), $(".new-folder-name").val()));
            if ($(".new-folder-name").val()) {
                $(".folder-name").html($(".new-folder-name").val());
            }
            $(".new-folder-name").val('');
            $(".new-folder-name").hide();
        }
    });
});