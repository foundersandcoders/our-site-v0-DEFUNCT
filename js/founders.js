/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Super sexy visual effects
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

$(window).resize(function() {
    // DROPDOWN DISPLAY BELOW 768px
    if ($(window).width() > 768) {
        $('#collapse').css('display', "block");
    } else {
        $('#collapse').css('display', "none");
    }
    // UPDATE 
    if (($(window).width() >= 992) && (window.scrollY < 200) && (window.location.pathname === "/")) {
        nav.classList.add("navedit");
        nav.style.height = "150px";
    } else if ($(window).width() < 992) {
        nav.classList.remove("navedit");
        nav.style.height = "auto";
        if ($(window).width() < 420) {
            // nav.style.height = "50px";
            nav.style.paddingTop = "10px";
        }
    }
});

/* Set the parallax panel's divs to be the same size */
window.addEventListener('load', function() {
   setHeight($("#titles-right"), $("#tech-stack-wrapper"));
    $(window).resize(function() {
      setHeight($("#titles-right"), $("#tech-stack-wrapper"));        
    }); 
}, false);

// sets height of element 1 to equal the height of element 2
function setHeight(elem1, elem2) {
   var height = elem2.height();
   elem1.css('height', height); 
}

/* Navbar collapse function */
function mobileNav (element){
    var collapse = document.getElementById(element)
    if (collapse.style.display == "inline"){
        collapse.className = "navbar";
        collapse.style.display = "none";
    }else{
        collapse.className = collapse.className + " shownav"
        collapse.style.display = "inline";
    };
};
function mobileNav (element){
    var collapse = document.getElementById(element)
    if (collapse.style.display == "inline"){
        collapse.className = "navbar";
        collapse.style.display = "none";
    }else{
        collapse.className = collapse.className + " shownav"
        collapse.style.display = "inline";
    };
};


/*--------------------------------------------------
Variable Declarations */

var mql = window.matchMedia("(min-width: 992px)");
//Nav bar elements
var nav = document.getElementById("nav");
var spinImg = document.getElementById("spin-img");
var menu = document.getElementById("collapse");
// Landing page elements
var landing = document.getElementById("landing");
var title = document.getElementById("title");
// Second panel elements
var parallaxPage = document.getElementById("parallax");
var techStack = document.getElementById("tech-stack");
var speed = -2.5;



/*--------------------------------------------------
Parallax and scroll movements 
    (operate only on larger screen sizes and only on root) */

//TODO: replace .html with a regex to id when on index
if (mql.matches && (window.location.pathname === "/")) {

    nav.style.height = "150px";
    nav.classList.add("navedit");
    nav.style.paddingTop = "30px";

    window.onscroll = function() { 
        didScroll = true;     
        var y = window.scrollY;
        // Rotation on nav img
        spinImg.style.transform = "rotate(" + (y/3) + "deg)";
        // Movement up of title
        title.style.transform = "translate(0px," + (y/speed) + "px)";
        // Subtle parallax on landing background
        landing.style.backgroundPosition = "0px " + ((y/speed)/3) + "px"
        // Parallax on techstack
        techStack.style.transform = "translate(0px," + (y/speed) + "px)";
        
        // Nav element Effects are dependent on start point
        if (y >= 150) {
            // First, draw up the height of the navbar
            nav.style.height = (150 - (y - 150)) + "px";
            nav.style.paddingTop = (30 - (y - 150)/(5/3) ) + "px";
            if (y >= 200) {
                // next, trigger the css transition for other elements
                nav.classList.remove("navedit");
                nav.style.paddingTop = 0;
                parallaxPage.classList.add("parallaxedit");
                if (y >= 250) {
                    // finally, fix the navbar at its smaller height
                    nav.style.height = "50px";
                }
            }
        }
        else {
            // if scroll distance is less than 150px then:
            nav.classList.add("navedit");
            parallaxPage.classList.remove("parallaxedit");
            nav.style.height = "150px";
            nav.style.paddingTop = "30px";
        }
    };

}  else if (mql.matches && (window.location.pathname !== "/")) {
    //if wide screen but not root
    //Only rotate
    window.onscroll = function() {      
        var y = window.scrollY;
        spinImg.style.transform = "rotate(" + (y/1.5) + "deg)";
    }
} else {
    // if not root and not wide screen:
    console.log("Visual effects OFF - view on a larger screen to see the sexy effects");
}
