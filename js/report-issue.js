$(() => {
    var div = $("#report-issue-draggable").draggable({
        containment: "parent",
        drag: () => {
            $('h3').text('Left: ' + div.offset().left + ' - Top: ' + div.offset().top);
        }
    });

    $('#report-issue-btn').click((e) => {
        if ($('#report-issue-draggable').is(":visible")) {
            $('#report-issue-draggable').hide();
        } else {
            $('#report-issue-draggable').show();
        }
    });

    $('#report-issue-draggable .card .card-header img:last-child').click((e) => {
        $('#report-issue-draggable').hide();
    });

    $('#report-issue-draggable .card .card-body .submit-feedback').click((e) => {
        $('#report-issue-draggable').hide();
    });
});