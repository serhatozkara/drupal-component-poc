(function ($) {

  /*
   * Moves the Main Menu depending on the size of the screen.
   * This prevents us from having to duplicate the Main Menu in separate locations.
   */

  $(document).ready(function() {
    mainMenuMover();

    $(window).resize(function(){
      mainMenuMover();
    });
  });


  function mainMenuMover() {
    width = $( window ).width();

    if(width >= 992 ) {
      $("#main-menu").prependTo('#large-screen-main-menu-container');
    } else {
      $("#main-menu").prependTo('#small-screen-main-menu-container');
    }
  }

})(jQuery);
