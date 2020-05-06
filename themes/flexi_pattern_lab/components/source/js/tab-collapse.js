(function ($) {  
  
  $(document).ready(function() {
    
    if ($(window).width() < 992) {
      moveTabsSmallScreen();
    }

    // Detect if the screen changes from Small to Large
    window.addEventListener('resize', tabScreenChecker);
  });
  

  function moveTabsSmallScreen() {
    
    $(".settings-nav a.list-group-item").each(function( index ) {
      navID = $(this).attr('href');
    });
    
    $(".settings-drawer .tab-pane").each(function( index ) {
      tabID = '#' + $(this).attr('id');
      tabMarkup = $(this);
      
      $(tabMarkup).insertAfter(".settings-nav a[href='" + tabID + "']");
    });
  }
  
  function moveTabLargeScreen() {
    $(".tab-pane").each(function(index) {
      $(this).appendTo('.settings-content .tab-content');
    });  
  }

  var tabScreenChecker = debounce(function() {
    width = $(window).width();

    if(width < 992) {
      moveTabsSmallScreen();
    }
    
    else {
      moveTabLargeScreen();
    }
    
    
  }, 250);
  

})(jQuery);
