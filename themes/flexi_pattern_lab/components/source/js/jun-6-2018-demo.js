(function ($) {

  // Get long Distance Toggle
  $("#longDistance input.toggle").change(function() {
    
    if($(this).is(':checked')) {
      $('#longDistanceSelect').addClass('show');
    }
    
    else {
      $('#longDistanceSelect').removeClass('show');
    }
    
  });
  
  $("button#phone-keep-number-verify").click(function() {
    $('#phone-keep-provider').addClass("show");
  });

  $('#phone-keep-provider').change(function() {
    $('#phone-keep-account').addClass("show");
  });
  
  $('#radiopaymentMethodCreditCard').click(function() {
    $('#credit-card-form').addClass("show");
  });
  
  $('#subscription-billing-address-different').click(function() {
    $('form#subscription-billing-address-form').addClass("show");
  });

  $('.add-address-link a').click(function(e) {
    e.preventDefault();
    $('#add-shipping-address').slideDown();
    $('#add-shipping-address input').focus();

  });

})(jQuery);
