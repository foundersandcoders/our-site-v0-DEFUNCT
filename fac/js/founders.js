/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		Super sexy visual effects
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

var techstack = document.getElementById("tech-stack");
var spinImg = document.getElementById("spin-img");
var navBar = document.getElementById("navbar");
var speed = -2.5;
var start = 150;
var mql = window.matchMedia("(min-width: 992px)");

/* Set the parallax panel's divs to be the same size */
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


/* Parallax (operates only on larger screen sizes) */
if (mql.matches) {
	window.onscroll = function() {
		var y = window.scrollY;
		techstack.style.transform = "translate(0px," + (y/speed) + "px)";
		console.log(y);
		spinImg.style.transform = "rotate(" + (y/2) + "deg)";
		if (y >= start) {
			navBar.style.height = (start - (y - start)) + "px";
			navBar.classList.add("navedit");
			if (navBar.offsetHeight < 51) {
				navBar.style.height = "50px";
			}
		}
		else {
			navbar.style.height = "150px";
			navBar.classList.remove("navedit");
		}
	};
} else {
	console.log("parallax disabled");
}

	


