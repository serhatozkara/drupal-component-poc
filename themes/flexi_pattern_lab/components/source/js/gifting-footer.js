(function ($) {
  $(document).ready(function() {
    $(window).on('resize',function() {
      if ($(window).width() < 786) {
        $( ".sticky-gifting-footer" ).show();
        $( ".btn-gift-top" ).hide();
      }
      else {
       $( ".sticky-gifting-footer" ).hide();
       $( ".btn-gift-top" ).show();
      }
    });
    $(document).ready(function() {
        $(window).trigger('resize');
    });
  });
})(jQuery);