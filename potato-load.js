(function() {

  var isElementInViewport (el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
  }

  // Replace images if they are in viewport
  var check = function($elmts) {
    $elmts.each(function(idx, el) {
      if (isElementInViewport(el)) {
        var $el = $(el);
        $el.attr('src', $el.data('src'));
      }
    });
  }

  $.fn.potatoload = function() {
      
      // Attach to scroll events
      $(window).scroll(check.bind(this, this));
      
      // Load initial images
      check(this);
      
      // Chaining
      return this;
  };
})();
