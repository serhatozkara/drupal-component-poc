(function ($) {
  $(document).ready(function() {

   $( '.swipeLeft svg' ).addClass( 'fi-light-gray' );

    function scrollEnd(){
      $('.ct-chart').scroll( function() {

        var $width = $('.ct-chart').outerWidth()
        var $scrollWidth = $('.ct-chart')[0].scrollWidth; 
        var $scrollLeft = $('.ct-chart').scrollLeft();

        if($scrollWidth - $width === $scrollLeft){
          $( '.swipeRight svg' ).addClass( 'fi-light-gray' );
        }

        if($scrollLeft===0){
          $( '.swipeLeft svg' ).addClass( 'fi-light-gray' );
          console.log('left end');
        }

      });
    }

    $('.swipeRight').click(function() {
      $('.ct-chart').animate( { scrollLeft: '+=460' }, 1000);
      $('.swipeLeft svg').removeClass('fi-light-gray' );
      scrollEnd();
    });

    $('.swipeLeft').click(function() {
      $('.ct-chart').animate( { scrollLeft: '-=460' }, 1000);
      $('.swipeRight svg').removeClass('fi-light-gray' );
      scrollEnd();
    });

  });
})(jQuery);