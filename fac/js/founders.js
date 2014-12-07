/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	Super sexy visual effects
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/

/*--------------------------------------------------
Variable Declarations */

var mql = window.matchMedia("(min-width: 992px)");
//Nav bar elements
var start = 150;
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
Set the parallax panel's divs to be the same size */

window.addEventListener('load', function() {
	setHeight($("#titles-right"), $("#tech-stack-wrapper"));
	$(window).resize(function() {
		setHeight($("#titles-right"), $("#tech-stack-wrapper"));        
	});
}, false);

// sets height of element 1 to equal the height of element 2
function setHeight(elem1, elem2) {
	var height = elem2.height()
	elem1.css('height', height); 
};


/*--------------------------------------------------
Parallax and scroll movements 
	(operate only on larger screen sizes) */

if (mql.matches) {
	window.onscroll = function() {		
		var y = window.scrollY;
		// Parallax on techstack
		techStack.style.transform = "translate(0px," + (y/speed) + "px)";
		// Rotation and movement on nav
		spinImg.style.transform = "rotate(" + (y/1.5) + "deg)";
		title.style.transform = "translate(0px," + (y/speed) + "px)";
		// Effects are dependent on start point
		if (y >= start) {
			nav.style.height = (start - (y - start)) + "px";
			nav.classList.add("navedit");
			// and endpoint (which assumes success of lines above)
			if (nav.offsetHeight < 51) {
				nav.style.height = "50px";
			}
		}
		else {
			nav.style.height = "150px";
			nav.classList.remove("navedit");
		}
	};
} else {
	console.log("parallax disabled");
}

function moveUpFaster(elem) {
	elem.style.transform = "translate(0px," + (y/speed) + "px)";
}


