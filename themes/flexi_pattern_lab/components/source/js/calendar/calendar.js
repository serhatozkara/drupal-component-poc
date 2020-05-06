$(document).ready(function(){
  $('.timepicker-appointment input').click(function() {
    
    var parentContainer = $(this).closest('div.timepicker-appointment');
    var parentLegend = $(this).closest('fieldset');
    
    $(parentContainer).add('fieldset.selected').removeClass('selected');
    $(parentLegend).toggleClass('selected');
    
  })
});