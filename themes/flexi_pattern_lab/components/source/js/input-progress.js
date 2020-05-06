(function ($) {

  // Toggle Progress
  $(".progress-input-container input.toggle").change(function() {
    // Get the nearest Progress Bar this is attached to
    var parentProgress = $(this).closest('.progress-input-container').find('.progress-bar');

    // Get the nearest Progress Bar label this is attached to
    var parentProgressLabel = $(this).closest('.progress-input-container').find('h4');

    // See if it is checked, and if so, set aria value to 1
    if ($(this).is(':checked')) {
      $(parentProgress).attr('aria-valuenow', 1);
      $(parentProgressLabel).removeClass('text-muted');
    }

    // If it is not checked, set aria value to 0
    else {
      $(parentProgress).attr('aria-valuenow', 0);
      $(parentProgressLabel).addClass('text-muted');
    }

    // Update Progress Bar
    updateProgressBar();
  });

  // Increment Button - Adding Function
  $('button[data-action="add"]').click(function() {

    // Get the nearest Progress Bar this is attached to
    var parentProgress = $(this).closest('.progress-input-container').find('.progress-bar');

    // Find how much to increment the data by
    var incrementStep = parentProgress.attr('data-increment-step');

    // Find out the max value
    var maxValue = parseInt(parentProgress.attr('aria-valuemax'), 10);

    // Get the current value, convert to integer, and store it
    var currentValue = parseInt(parentProgress.attr('aria-valuenow'), 10);

    // If the current value is less than the max value, then perform actions...
    if (currentValue < maxValue) {

      // Increment current value by the increment step
      var updatedValue = (+currentValue + +incrementStep);

      // Change the value on the progress bar
      $(parentProgress).attr('aria-valuenow', updatedValue);

      // Get the nearest Progress Bar label this is attached to
      var parentProgressLabel = $(this).closest('.progress-input-container').find('h4');

      // Update the label value
      $(parentProgressLabel).html(updatedValue);

      // Update Progress Bar
      updateProgressBar();
    }
  });

  // Increment Button - Subtracting Function
  $('button[data-action="subtract"]').click(function() {

    // Get the nearest Progress Bar this is attached to
    var parentProgress = $(this).closest('.progress-input-container').find('.progress-bar');

    // Find how much to increment the data by
    var incrementStep = parentProgress.attr('data-increment-step');

    // Find out the min value
    var minValue = parseInt(parentProgress.attr('aria-valuemin'), 10);

    // Get the current value, convert to integer, and store it
    var currentValue = parseInt(parentProgress.attr('aria-valuenow'), 10);

    // If the current value is more than the min value, then perform actions...
    if (currentValue > minValue) {
      // Subtract current value by the increment step
      var updatedValue = (+currentValue + -incrementStep);

      // Change the value on the progress bar
      $(parentProgress).attr('aria-valuenow', updatedValue);

      // Get the nearest Progress Bar label this is attached to
      var parentProgressLabel = $(this).closest('.progress-input-container').find('h4');

      // Update the label value
      $(parentProgressLabel).html(updatedValue);

      // Update Progress Bar
      updateProgressBar();
    }
  });


  // Checks the values of the Progress Bar and adds width style to bar when page loads.
  function updateProgressBar() {
    $( ".progress-bar" ).each(function( index ) {
      var valueNow = $(this).attr('aria-valuenow');
      var valueMax = $(this).attr('aria-valuemax');
      var progressWidthPercent = ((valueNow / valueMax) * 100);

      $(this).width(progressWidthPercent + '%');
    });
  }

  $(document).ready(function() {
    updateProgressBar();
  });

})(jQuery);
