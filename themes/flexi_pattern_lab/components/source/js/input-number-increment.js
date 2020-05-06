(function ($) {

  // Increment Button - Adding Function
  $('.number-increment-container button[data-action="add"]').click(function() {

    // Get the nearest Input this is attached to
    var parentInput = $(this).closest('.number-increment-container').find('input');

    // Find out the max value
    var maxValue = parseInt(parentInput.attr('max'), 10);

    // Get the current value, convert to integer, and store it
    var currentValue = parseInt(parentInput.attr('value'), 10);

    // If the current value is less than the max value, then perform actions...
    if (currentValue < maxValue) {

      // Increment current value by 1
      var updatedValue = (+currentValue + +1);

      // Update the input value
      $(parentInput).attr("value", updatedValue);
    }
  });

  // Increment Button - Subtracting Function
  $('.number-increment-container button[data-action="subtract"]').click(function() {
    // Get the nearest Input this is attached to
    var parentInput = $(this).closest('.number-increment-container').find('input');

    // Find out the max value
    var minValue = parseInt(parentInput.attr('min'), 10);

    // Get the current value, convert to integer, and store it
    var currentValue = parseInt(parentInput.attr('value'), 10);

    // If the current value is more than the min value, then perform actions...
    if (currentValue > minValue) {

      // Decrement current value by 1
      var updatedValue = (+currentValue + -1);

      // Update the input value
      $(parentInput).attr("value", updatedValue);
    }
  });

})(jQuery);
