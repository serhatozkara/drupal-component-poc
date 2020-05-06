(function ($) {
    
  $(document).ready(function() {
    
    /* Check if it's a solid gauge */
    $('.gauge-solid').each(function (index) {
      percent = $(this).data('gauge-percent');   
      gaugeProgress($(this), percent);
      needleProgress($(this), percent);
    });
    
    /* Check if it's a dashed gauge */
    $('.gauge-dash').each(function (index) {
      state = $(this).data('gauge-state');
      gaugeState($(this), state);
    });
    
  });
  
  /* 
   * This function is used on 'solid' gauges. It checks the percent from
   * 'data-gauge-percent' and uses that value to see how much it should fill.
   *
   * The values 943 and 565 come from the fact that the SVG used has a radius of 150px.
   * Because we are using a <circle> for our gauge, the number 943 comes from:
   * 2 * pi * 150 = 943
   * 
   * 943 is the circumference of the circle, of which we are cutting in half.
   *
   * 565 refers to the visible amount we see of the circle. The gauge is just
   * over half of the entire circle, about 60%.
   *
   * 565 / 943 = 0.59, or ~60%.
   */
  function gaugeProgress(context, percent) {

    if (percent > 0.0 ) {
      $('circle[class="gauge-fill"]', context).attr('stroke-linecap','round');
    }

    var gauge = 565;
    var gaugeFill = gauge * percent;
    $('circle[class="gauge-fill"]', context).attr('stroke-dasharray', gaugeFill + ', 943');
  }


  /*
   * This function is used on 'solid' gauges. It check the percent from
   * 'data-gauge-percent' and uses that value to see how much the needle should be angled.
   *
   * The value 220 comes from the amount of angle that the needle can move, 
   * from 'empty' to 'full'.
   *
   * In CSS, the needle is rotated -110 degrees on page load, appearing as 'empty' in the gauge.
   * Then, we take the percentage, multiple it by 220. We take that result and 'add' it
   * to -110 degrees.
   * 
   * We use this value (needleDegreeTransform) to change the rotation.
   */
  function needleProgress(context, percent) {
    
    // Check percent and apply CSS class for needle color
    if (percent > 0.0 && percent < 0.4 ) {
      $('.needle-path', context).addClass('needle-path-green');
    }
    else if (percent >= 0.4 && percent < 0.6 ) {
      $('.needle-path', context).addClass('needle-path-yellow');
    }
    else if (percent >= 0.6 ) {
      $('.needle-path', context).addClass('needle-path-red');
    }

    var needleDegrees = 220;
    var needleDegreeDiff = needleDegrees * percent;
    var needleDegreeTransform = (-110 + needleDegreeDiff);

    $('.needle-path', context).attr('transform', 'translate(167, 0) rotate('+needleDegreeTransform+' 8 105)');
    $('.needle-path', context).css('transform', 'translate(167px, 0px) rotate('+needleDegreeTransform+'deg)');
  }
  
  /*
   * This function is used on 'dashed' gauges. It checks the value from
   * 'data-gauge-state' and uses that value to apply CSS and transforms.
   *
   * For dashed gauges, there are only 3 states: good, warning, danger.
   */
  function gaugeState(context) {
    
    if (state == 'good') {
      $('.needle-path', context).addClass('needle-path-green');
      $('.needle-path', context).attr('transform', 'translate(167, 0) rotate(-90 8 105)');
      $('.needle-path', context).css('transform', 'translate(167px, 0px) rotate(-90deg)');
    }
    
    else if (state == 'warning') {
      $('.needle-path', context).addClass('needle-path-yellow');
      $('.needle-path', context).attr('transform', 'translate(167, 0) rotate(0 8 105)');
      $('.needle-path', context).css('transform', 'translate(167px, 0px) rotate(0deg)');
    }
    
    else if (state == 'danger') {
      $('.needle-path', context).addClass('needle-path-red');
      $('.needle-path', context).attr('transform', 'translate(167, 0) rotate(90 8 105)');
      $('.needle-path', context).css('transform', 'translate(167px, 0px) rotate(90deg)');
    }    
  }

})(jQuery);
