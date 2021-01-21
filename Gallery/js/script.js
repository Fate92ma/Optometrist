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

    // One

    $(".one").hover(function () {
        $(".one1").slideDown();
    });

    $(".one").mouseleave(function () {
        $(".one1").slideUp();
    });

    // Two

    $(".two").hover(function () {
        $(".two1").slideDown();
    });

    $(".two").mouseleave(function () {
        $(".two1").slideUp();
    });

    // Three

    $(".three").hover(function () {
        $(".three1").slideDown();
    });

    $(".three").mouseleave(function () {
        $(".three1").slideUp();
    });

    // Four

    $(".four").hover(function () {
        $(".four1").slideDown();
    });

    $(".four").mouseleave(function () {
        $(".four1").slideUp();
    });

    // Five

    $(".five").hover(function () {
        $(".five1").slideDown();
    });

    $(".five").mouseleave(function () {
        $(".five1").slideUp();
    });

    // Six

    $(".six").hover(function () {
        $(".six1").slideDown();
    });

    $(".six").mouseleave(function () {
        $(".six1").slideUp();
    });

    // Seven

    $(".seven").hover(function () {
        $(".seven1").slideDown();
    });

    $(".seven").mouseleave(function () {
        $(".seven1").slideUp();
    });

    // Eight

    $(".eight").hover(function () {
        $(".eight1").slideDown();
    });

    $(".eight").mouseleave(function () {
        $(".eight1").slideUp();
    });

    // Call 

    $(".call").click(function () {
        alert("Thanks For Calling.");
    });

});