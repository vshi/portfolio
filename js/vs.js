$(document).ready(function(){
    $("#portfolio").owlCarousel({
        singleItem: true,
        autoHeight : false,
        responsive: true,
        responsiveRefreshRate : 200,
        responsiveBaseWidth: window
    });
        
    $(".fancybox").fancybox({
        closeClick : true,

        helpers: {
              title : {
                  type : 'inside'
              }
          }
	});
    
    $(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 700);
        return false;
      }
    }
  });
});
});

