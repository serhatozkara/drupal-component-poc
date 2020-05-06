(function ($) {
  
  $(document).ready(function() {
    $('.circle-loader').each(function (index) {
      
      // Get value of data-circle-percent
      percent = $(this).data('circle-percent');
      circleUpdate(percent);
    });
  });
  

  function circleUpdate(percent) {
    
    // If value is greater than 0, then add a round linecap
    if (percent > 0.0 ) {
      $('circle[class="progress-value"]').attr('stroke-linecap','round');
    }

    // Circumference of circle
    var circle = 175.929;
    
    // Fill circle by value of data-circle-percent
    var circleFill = circle * percent;
    $('circle[class="progress-value"]').attr('stroke-dasharray', circleFill + ', 175.929');
  }

})(jQuery);
