$(document).ready(function(){
  $('.timepicker-appointment').slick({
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
         breakpoint: 1024,
         settings: {
           slidesToShow: 4,
           slidesToScroll: 4,
         }
       },
       {
          breakpoint: 576,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
    ]
  });
});