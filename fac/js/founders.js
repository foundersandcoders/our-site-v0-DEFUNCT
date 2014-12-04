//navbar
$(window).scroll(function() {
    if ($(".navwrap").offset().top > 5) {
        $(".navwrap").addClass("navedit");
    } else {
        $(".navwrap").removeClass("navedit");
    }
});

//parallax
var screen1 = document.getElementById("screen1");
var slow = 5;
window.onscroll = function() {
    var y = window.scrollY;
}

//video
// $(function(){
//   $('#video').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });

//   $(window).resize(function(){
//     $('#video').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });
//   });
// });

