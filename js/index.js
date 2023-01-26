$(".scrollProject").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".portIntro").offset().top
    }, 2000);
});

$("#scrollButton").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".navmenu").offset().top
    }, 2000);
});

