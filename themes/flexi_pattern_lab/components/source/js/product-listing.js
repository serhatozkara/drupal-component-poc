$('.custom-select').click(function(){
  alert( "Handler for .change() called." );
});


$(".custom-select").each(function() {
  var classes = $(this).attr("class"),
      id      = $(this).attr("id"),
      name    = $(this).attr("name");
  var template =  '<div class="' + classes + '">';
      template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
      template += '<div class="custom-options">';
      $(this).find("option").each(function() {
        template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
      });
  template += '</div></div>';

  $(this).wrap('<div class="custom-select-wrapper"></div>');
  $(this).hide();
  $(this).after(template);
});
$(".custom-option:first-of-type").hover(function() {
  $(this).parents(".custom-options").addClass("option-hover");
}, function() {
  $(this).parents(".custom-options").removeClass("option-hover");
});
$(".custom-select-trigger").on("click", function() {
  $('html').one('click',function() {
    $(".custom-select").removeClass("opened");
  });
  $(this).parents(".custom-select").toggleClass("opened");
  event.stopPropagation();
});
$(".custom-option").on("click", function() {
  $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
  $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
  $(this).addClass("selection");
  $(this).parents(".custom-select").removeClass("opened");
  $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
});


$( ".sources" ).change(function() {
  alert( "Handler for .change() called." );
});






jQuery(document).ready(function(){
    function brandList(){
        var brand = jQuery(".fieldgroup.form-composite.form-checkboxes").children();
        jQuery(brand).each(function(i){
            jQuery(this).addClass("check-item");
        });
    }
    brandList();

    var maxPrice = null;
    var max = null;
    var minPrice = null;
    var min = null;
    function checkPrice() {
        maxPrice = jQuery("input[data-drupal-selector='edit-price-number-max']").val();
        max = "<span class='max-price'>$ " + maxPrice + "</span>";
        minPrice = jQuery("input[data-drupal-selector='edit-price-number-min']").val();
        min = "<span class='min-price'>$" + minPrice + "</span>";
    }

    function addPriceClass() {
        jQuery('.ui-slider-handle.ui-corner-all.ui-state-default').each(function (i) {
            if (i === 0) {
                jQuery(this).addClass('min-price-value');
            }
            if (i === 1) {
                jQuery(this).addClass('max-price-value');
            }
        });
    }

    function displayPrice() {
        checkPrice();
        addPriceClass();
        jQuery("input[data-drupal-selector='edit-price-number-max']").css("display", "none");
        jQuery("input[data-drupal-selector='edit-price-number-min']").css("display", "none");
        jQuery(".min-price-value").prepend(min);
        jQuery(".max-price-value").prepend(max);
    }
    displayPrice();
    function moveRange(){
        jQuery(".ui-slider-handle.ui-corner-all.ui-state-default").mousemove(function () {
            if (jQuery("span").hasClass("max-price")) {
                if (jQuery("span").hasClass("min-price")) {
                    checkPrice();
                    jQuery(".max-price").html("$" + maxPrice);
                    jQuery(".min-price").html("$" + minPrice);
                }
            }
        });
    }
    function filterButtonChangeText(){
        jQuery(".btn.btn-green.btn-border-false.btn-xl.px-5").click(function(){
            if(jQuery("#filter-content").hasClass("show")){
                jQuery(".btn.btn-green.btn-border-false.btn-xl.px-5 span").text("Show filters");
                jQuery("svg.filter-minus.fi.fi-16.fi-").css("display","none");
                jQuery("svg.filter-plus.fi.fi-16.fi-").css("display","inline-block");
            }else{
                jQuery(".btn.btn-green.btn-border-false.btn-xl.px-5 span").text("Hide filters");
                jQuery("svg.filter-minus.fi.fi-16.fi-").css("display","inline-block");
                jQuery("svg.filter-plus.fi.fi-16.fi-").css("display","none");
            }
        });
    }
    filterButtonChangeText();
    moveRange();
    jQuery(document).ajaxComplete(function(event, xhr, settings) {
        if(!jQuery("div").hasClass("check-item")){
            brandList();
        }
        displayPrice();
        moveRange();
        filterButtonChangeText();
    });

});











      $(function () {
  $("#slider-range").slider({
    range: true,
    min: 0,
    max: 20000,
    values: [0, 10000],
    animate: true,
    step: 5,
    slide: function (event, ui) {
      $("#amount-min").val("$ " + ui.values[0] + "");
      $("#amount-max").val("$ " + ui.values[1] + "");
    } });


  $("#amount-min").val("min : " + $("#slider-range").slider("values", 0) + "$");
  $("#amount-max").val("max : " + $("#slider-range").slider("values", 1) + "$");
});
