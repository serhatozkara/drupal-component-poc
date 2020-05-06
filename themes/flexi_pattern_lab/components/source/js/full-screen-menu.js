(function ($) {

  $(document).ready(function() {
    $('.btn-toggle-mobile-menu').click(function() {
      toggleFullScreenMenuTopLeft();
    });

    $('.toggle-full-screen-menu-search').click(function() {
      toggleFullScreenMenuTopRight();
    });

    // Detect if the screen changes from Small to Large
    window.addEventListener('resize', toggleFullScreenMenuTopLeftScreenChange);
  });

  function toggleFullScreenMenuTopLeft() {
    if (!$('.full-screen-menu-wrapper.top-left').hasClass('open-menu')) {
      $('.full-screen-menu-wrapper.top-left').addClass('open-menu');
      $('.site-logo').addClass('full-screen-menu-top-left-open');
      $('.main-menu-second-level').addClass('full-screen-menu-top-left-open');
      $('.navbar-right').addClass('full-screen-menu-top-left-open');
      $('body').css('overflow', 'hidden');
      $('.btn-toggle-mobile-menu').addClass('active');
      return;
    }
    if ($('.full-screen-menu-wrapper.top-left').hasClass('open-menu')) {
      $('.full-screen-menu-wrapper.top-left').removeClass('open-menu');
      $('.site-logo').removeClass('full-screen-menu-top-left-open');
      $('.main-menu-second-level').removeClass('full-screen-menu-top-left-open');
      $('.navbar-right').removeClass('full-screen-menu-top-left-open');
      $('body').css('overflow', 'initial');
      $('.full-screen-menu-wrapper.top-left').addClass('close-menu').delay(1600).queue(function() {
        $('.btn-toggle-mobile-menu').removeClass('active');
        $(this).removeClass('close-menu');
        $(this).dequeue();
      });
    }
  }

  function toggleFullScreenMenuTopRight() {
    if (!$('.full-screen-menu-wrapper.top-right').hasClass('open-menu')) {
      $('.full-screen-menu-wrapper.top-right').addClass('open-menu');
      $('.navbar').addClass('full-screen-menu-top-right-open');
      $('.main-menu-second-level').addClass('full-screen-menu-top-right-open');
      $('.navbar').addClass('main-menu-items-on-top');
      $('body').css('overflow', 'hidden');

      if ($('#main-menu').hasClass('scroll-navbar-up')) {
        $('#main-menu').delay(1000).queue(function() {
          $(this).removeClass('scroll-navbar-up');
          $(this).dequeue();
        });
      }
      return;
    }
    if ($('.full-screen-menu-wrapper.top-right').hasClass('open-menu')) {
      $('.full-screen-menu-wrapper.top-right').removeClass('open-menu');
      $('.navbar').removeClass('full-screen-menu-top-right-open');
      $('.main-menu-second-level').removeClass('full-screen-menu-top-right-open');
      $('body').css('overflow', 'initial');
      $('.full-screen-menu-wrapper.top-right').addClass('close-menu').delay(1600).queue(function() {
        $('.navbar').removeClass('main-menu-items-on-top');
        $(this).removeClass('close-menu');
        $(this).dequeue();
      });

      if ($('.main-menu-second-level').hasClass('scroll-navbar-up')) {
        $('#main-menu').addClass('scroll-navbar-up');
      }
    }
  }

  // Check if the changed screen width is over 992px
  // If yes, then close the Full Screen Menu
  var toggleFullScreenMenuTopLeftScreenChange = debounce(function() {
    width = $(window).width();

    if((width >= 992) && ($('.full-screen-menu-wrapper.top-left').hasClass('open-menu'))) {
      toggleFullScreenMenuTopLeft();
    }
  }, 250);

})(jQuery);
