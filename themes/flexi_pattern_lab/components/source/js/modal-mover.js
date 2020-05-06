/* Modals in Bootstrap should be placed in a top-level position, as outlined on this page:
 * https://getbootstrap.com/docs/4.1/components/modal/#how-it-works
 *
 * This JS simply finds all the '.modal's on the page and appends them to the end of the document.
 */

(function ($) {
  $('.modal').appendTo(document.body);
})(jQuery);




$('#more-social').click(function(){
    $('.hide-social').toggle();
    $('#more-social').hide();
});
