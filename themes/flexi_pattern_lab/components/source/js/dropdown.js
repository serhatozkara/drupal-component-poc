
(function ($) {
  $(document).ready(function() {
    $(function () {
      $('[data-toggle="popover"]').popover()
    })

    $('.dropdown').hover(
      function() {
        $(this).find('.dropdown-menu').addClass('show');
      },
      function() {
        $(this).find('.dropdown-menu').delay(1000).queue(function() {
        $(this).removeClass('show');
        $(this).dequeue();
      });
    })
  });
})(jQuery);
