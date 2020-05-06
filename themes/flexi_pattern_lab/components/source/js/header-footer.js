jQuery(document).ready(function() {

  footerMenu();

  jQuery(window).resize(function(){

    footerMenu();

  });

});


function footerMenu() {

  width = jQuery( window ).width();

  if(width >= 768 ) {
    jQuery('.pre-footer-collapse').removeClass('collapse');
    jQuery('.pre-footer-collapse-link').removeAttr('data-toggle');
  } else {
    jQuery('.pre-footer-collapse').addClass('collapse');
    jQuery('.pre-footer-collapse-link').attr("data-toggle", "collapse");
  }
}
