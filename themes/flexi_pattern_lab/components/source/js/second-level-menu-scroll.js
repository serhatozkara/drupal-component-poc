(function ($) {

$(document).ready(function() {
  if($('.section-header').hasClass('second-level-menu-enabled')) {

    if ( $( ".main-menu-second-level" ).children().length > 0 ) {
      $('.main-menu-second-level').removeClass('scroll-navbar-up');
      $(window).on("scroll", function(){
        amountScrolled();
      }) 
      if($('.main-menu-second-level').hasClass('scroll-navbar-up')) {
        $('.section-header').css('height', '75px');
      } else {
        $('.section-header').css('height', '120px');
      }
    } else {
      $('.section-header').css('height', '75px');
    }

  }

});

var amountScrolled = debounce(function() {
  var scrollTop = $(window).scrollTop()
  var width = $(window).width();

  if((scrollTop >= 50) && (width >= 992)) {
    $('.navbar-center').addClass('scroll-navbar-up');
    $('.main-menu-second-level').addClass('scroll-navbar-up');
    $('.section-header').css('height', '75px');
  }

  if((scrollTop < 50) && (width >= 992)) {
    $('.navbar-center').removeClass('scroll-navbar-up');
    $('.main-menu-second-level').removeClass('scroll-navbar-up');
    $('.section-header').css('height', '120px');
  }
}, 250);

})(jQuery);
