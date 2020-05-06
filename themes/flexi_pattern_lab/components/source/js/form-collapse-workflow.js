(function ($) {

  // This file handles the hiding/showing of the Activation and Subscription steps.
  $('button[data-action="next-step"]').click(function() {
  
    // Find the container that this is attached to.
    var parentContainer = $(this).closest('.form-collapse-container');
  
    // Find the next form step
    var nextContainer = $(parentContainer).next('.form-collapse-container');
    
    // Find the next form step with the form inside of it
    var nextContainerForm = $(nextContainer).find('.form-container');

    if ($(nextContainerForm).hasClass('activation-collapse-shipping-address')) {
      // special case in which the next step should be skipped
      // Show the next form step
      $(nextContainer).addClass('show');

      $.each($(nextContainer).find('.activation-collapse-shipping-address'), function(index, element) {
        if ($(element).hasClass('show')) {
          $(element).removeClass('show');
        } else {
          $(element).addClass('show');
        }
      });

      // resetting variables
      nextContainer = $(nextContainer).next('.form-collapse-container');

      nextContainerForm = $(nextContainer).find('.form-container');
    }
  
    // Show the next form step
    $(nextContainer).delay(1000).addClass('show');
  
    // Pause for a moment while the previous form container does it's closing animation
    setTimeout(function() {
    
      // Find the title that has the data-form-scroll attribute that equals 'yes'
      var nextContainerTitle = $(nextContainer).find('[data-form-scroll="yes"]');
    
      // If it's yes, then animate to it
      if ($(nextContainerTitle).attr('data-form-scroll') == "yes") {
        $('html, body').animate({
          scrollTop: ($(nextContainerTitle).offset().top -100)
        },1000);   
      
        // Change the title data-form-scroll value to 'no' to prevent future scrolling
        $(nextContainerTitle).attr('data-form-scroll', 'no');
      }
      
      // If the current form has priceReveal set to yes, then add class to fixed-bottom
      if ($(nextContainer).data('priceReveal') == 'yes' ) {
        $('.price-status').addClass('show');
        $('body').addClass('price-status-reveal-padding');
      }
      
      // If the current form has priceReveal set to no, then remove class to fixed-bottom
      else {
        $('.price-status').removeClass('show');
        $('body').removeClass('price-status-reveal-padding');
      }
      
      // If the current conatiner is 'TermsConfirmReveal', then add class to fixed-bottom
      if ($(nextContainer).data('termsConfirmReveal') == 'yes' ) {
        $('.price-status-terms').addClass('show');
        $('body').addClass('price-status-reveal-padding');
      }
        
    }, 1200);
    
  });
})(jQuery);