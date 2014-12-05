//navbar
$(window).scroll(function() {
    if ($(".navwrap").offset().top > 5) {
        $(".navwrap").addClass("navedit");
    } else {
        $(".navwrap").removeClass("navedit");
    }
});