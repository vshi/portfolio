$(document).ready(function(){
    
    $("img[class^='scroll-']").on('click', function(e) {
    // prevents the default action of the link
    e.preventDefault();
    // assigns the text of the clicked-link to a variable for comparison purposes
    var currentClass = $(this).attr('class');
    
    if (currentClass == "scroll-u"){
        $('html, body').animate({
        scrollTop: $("#navbar").offset().top
    }, 500);
    }
    else if (currentClass == "scroll-r"){
        
    }else if (currentClass == "scroll-l"){
        
    }else{
        
    }
});
    
    function isScrolledIntoView(elem) {
        var centerY = Math.max(0,((jQuery(window).height()-jQuery(elem).outerHeight()) / 2) 
                      + jQuery(window).scrollTop());

        var elementTop = jQuery(elem).offset().top;
        var elementBottom = elementTop + jQuery(elem).height();

        return elementTop <= centerY && elementBottom >= centerY;
    }
    
    jQuery(window).on("scroll resize", function() {
        jQuery(".makeVisible").each(function(index, $(".p-item")) {
            if (isScrolledIntoView($(".p-item"))) {
               $(".p-item").animate({opacity: 1.0}, 500);
            }
        });
    });

});

