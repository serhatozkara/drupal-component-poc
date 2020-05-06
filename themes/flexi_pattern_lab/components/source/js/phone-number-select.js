(function ($) {

$('input[name="phoneNumber"]').click(function() {
  // Get the ID of the radio
  var inputID = $(this).attr('id');
  
  // Find the form with the same ID
  var parentForm = $(this).closest('form');
  
  $(parentForm).nextAll('form').removeClass('show');
  $(parentForm).nextAll('form#' + inputID).addClass('show');
});

$('#phone-choose .input-group-append button').click(function() {
  // TODO: Ajax call to retrieve the valid numbers and adding them to the list

  // show the list
  $('#search-a-number-results').slideDown();
});

})(jQuery);
