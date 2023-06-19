$(document).ready(function () {
    $("button").click(function (e) {
        e.preventDefault();
        $(".modal-parent").fadeIn(function () {
            $(".modal").fadeIn();
        });
    });
    $(".X,.modal-parent").click(function (e) {
        e.preventDefault();
        $(".modal").fadeOut(function () {
            $(".modal-parent").fadeOut();
        });
    });
});
