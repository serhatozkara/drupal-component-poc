$('.device-bottom-up .head').click(function() {
    $('.device-bottom-up .content').toggle();
    $('.device-bottom-up .head i').toggleClass('rotate');
});

$('.device-bottom-up .item').click(function() {
    $('.device-bottom-up .item').toggleClass('selected');
});
