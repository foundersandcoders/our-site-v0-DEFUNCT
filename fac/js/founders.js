$(window).scroll(function() {
    if ($(".navwrap").offset().top > 50) {
        $(".navwrap").addClass("navedit");
    } else {
        $(".navwrap").removeClass("navedit");
    }
});

var screen1 = document.getElementById("screen1");
var slow = 5;
window.onscroll = function() {
    var y = window.scrollY;
    screen1.style.backgroundPosition = "0px " + (y / slow) + "px";
}
