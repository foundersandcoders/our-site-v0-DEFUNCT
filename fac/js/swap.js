/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Super sexy visual effects
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/


/*--------------------------------------------------
Set the parallax panel's divs to be the same size */

window.addEventListener('load', function() {
    setHeight($("#titles-right"), $("#tech-stack-wrapper"));
    $(window).resize(function() {
        setHeight($("#titles-right"), $("#tech-stack-wrapper"));        
    });
    // if (mql.matches) {       
    //  var y = window.scrollY;
    //  if (y >= (start + (start - end)) {
    //      nav.style.height = "50px";
    //  }
    // } else {
    //  console.log("parallax disabled below 992px");
    // }
}, false);

// sets height of element 1 to equal the height of element 2
function setHeight(elem1, elem2) {
    var height = elem2.height()
    elem1.css('height', height); 
};


/*--------------------------------------------------
Variable Declarations */

var mql = window.matchMedia("(min-width: 992px)");
//Nav bar elements
var start = 150;
var end = 50;
var nav = document.getElementById("nav");
var spinWrapper = document.getElementById("spin-wrapper");
var spinImg = document.getElementById("spin-img");
var logo = document.getElementById("logo");
var menu = document.getElementById("menu");
// Landing page elements
var title = document.getElementById("title");
// Second panel elements
var techStack = document.getElementById("tech-stack");
var speed = -2.5;


/*--------------------------------------------------
Parallax and scroll movements 
    (operate only on larger screen sizes) */

if (mql.matches) {
    window.onscroll = function() {      
        var y = window.scrollY;
        console.log(y);
        // Rotation on nav img
        spinImg.style.transform = "rotate(" + (y/1.5) + "deg)";
        // Movement up of title
        title.style.transform = "translate(0px," + (y/speed) + "px)";
        // Parallax on techstack
        techStack.style.transform = "translate(0px," + (y/speed) + "px)";
        // Nav element Effects are dependent on start point
        if (y >= start) {
            nav.style.height = (start - (y - start)) + "px";
            // delay applying css transition
            if (y >= 200) {
                console.log("hdf" + y)
                nav.classList.add("navedit");
            } else {
                nav.classList.remove("navedit");
            }
            // and endpoint (which assumes success of lines above)
            if (nav.offsetHeight <= end) {
                nav.style.height = "50px";
            }
        }
        if (y >= start + (start - end)) {
            nav.style.height = "50px";
        }
    };
} else {
    console.log("parallax disabled below 992px");
}


