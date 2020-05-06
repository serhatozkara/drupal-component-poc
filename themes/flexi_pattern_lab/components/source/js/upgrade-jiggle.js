/*
 * This JS should run on the BSS Loyalty page.
 * When a user applies an upgrade, they need to choose 'where' to add it.
 *
 * After clicking 'apply' this file will apply the CSS class 'jiggle' to all upgrades
 * that have the class 'upgrade-applicable'.
 */

(function ($) {
  $('[data-apply-upgrade]').click(function(event) {
    
    $('.upgrade-container').find('.upgrade-applicable').addClass('jiggle');
    
  });
  
})(jQuery);
