/* Adjust and animate navbar on scroll */
$(window).scroll(function() {
    if ($(".navwrap").offset().top > 5) {
        $(".navwrap").addClass("navedit");
    } else {
        $(".navwrap").removeClass("navedit");
    };
});

/* Set the second panel's divs to be the same size */
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
}
