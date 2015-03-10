$(document).ready(function(){
    $("#up").click(function() {
    $('html, body').animate({
        scrollTop: $("#header").offset().top
    }, 500);
});

});

