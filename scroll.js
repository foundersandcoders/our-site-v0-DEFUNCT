var screen1 = document.getElementById("screen1");
var title = document.getElementById("title");
var lightbulb = document.getElementById("lightbulb");
var screen2 = document.getElementById("screen2");
var slow = -5;


window.onscroll = function() {
    var y = window.scrollY;
    screen1.style.backgroundPosition = "0px " + (y / slow) + "px";
    title.style.opacity
    lightbulb.style.transform = "translate(0px," + ((y/-0.25)-50) + "px)"
    screen2.style.transform = "translate(0px," + (y/-1.1) + "px)"
}
