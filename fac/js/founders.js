/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Super sexy visual effects
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

$(window).resize(function() {
    if ($(window).width() > 800) {
     $('#collapse').css('display', "block");
    }
    else {$('#collapse').css('display', "none");}
 });


/* Adjust and animate navbar on scroll */
$(window).scroll(function() {
    if ($(".navwrap").offset().top > 5) {
        $(".navwrap").addClass("navedit");
    } else {
        $(".navwrap").removeClass("navedit");
    };
});

/* Set the parallax panel's divs to be the same size */
window.addEventListener('load', function() {
   setHeight($("#titles-right-wrapper"), $("#tech-stack-wrapper"));
    $(window).resize(function() {
      setHeight($("#titles-right-wrapper"), $("#tech-stack-wrapper"));        
    }); 
}, false);

// sets height of element 1 to equal the height of element 2
function setHeight(elem1, elem2) {
   var height = elem2.height()
   elem1.css('height', height); 
};


/* Techstack parallax operates only on larger screen sizes */
var techstack = document.getElementById("tech-stack");
var speed = -2.5;
var mql = window.matchMedia("(min-width: 992px)");

if (mql.matches) {
    window.onscroll = function() {
        var y = window.scrollY;
        techstack.style.transform = "translate(0px," + (y/speed) + "px)";
    };
} else {
    console.log("parallax disabled");
}


