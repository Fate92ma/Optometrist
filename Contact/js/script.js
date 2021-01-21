$(document).ready(function () {

    // Search

    $(".fa-search").click(function () {
        $(this).hide();
        $(".fa-times").show();
        $(".search input").show();
    });

    // Close

    $(".fa-times").click(function () {
        $(this).hide();
        $(".fa-search").show();
        $(".search input").hide();
    });

    // Mini

    $(".list").click(function () {
        $(".header-list").toggleClass("mini");
    });

    // Header

    $(window).scroll(function () {
        var i = $(this).scrollTop()

        if (i >= 100) {
            $(".top i").css("visibility", "visible");
        } else {
            $(".top i").css("visibility", "hidden");
        }

    });

    // Back to top

    $(".top i").click(function () {
        $("body", "html").animate({
            scrollTop: 0
        }, 1000)
    });

    // Input

    $("input , textarea").focusin(function () {
        $(this).attr('placeholder', '');
    });

    $("input , textarea").focusout(function () {
        $(this).css('border', '1px solid red');
        $(this).attr('placeholder', 'This field is required');
    });

    // Call 

    $(".call1").click(function () {
        alert("Thanks For Calling.");
    });

    $(".call").click(function () {
        alert("Thanks For Calling.");
    });

});