(function(window) {
  var isElementInViewport= function(el) {
    var rect = el.getBoundingClientRect();

    return !(
      rect.left > (window.innerWidth || document.documentElement.clientWidth) ||
      rect.right < 0 ||
      rect.top > (window.innerHeight || document.documentElement.clientHeight) ||
      rect.bottom < 0
    );
  };

  var check = function(el) {
    if (isElementInViewport(el)) {
      el.setAttribute('src', el.getAttribute('data-src'));
    }
  };

  // copied from underscore
  var debounce = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    options || (options = {});
    var later = function() {
      previous = options.leading === false ? 0 : new Date;
      timeout = null;
      result = func.apply(context, args);
    };
    return function() {
      var now = new Date;
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0) {
        clearTimeout(timeout);
        timeout = null;
        previous = now;
        result = func.apply(context, args);
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  window.potatoload = function(selector) {
    
    // Get DOM objects
    var elements = Array.prototype.slice.call(document.querySelectorAll(selector));

    // Check on scroll and visible imgs on load
    elements.forEach(function(el, idx) {

      // debounce so we don't check intersections for every pixel scrolled
      window.addEventListener('scroll', debounce(check.bind(this, el), 100)); 
      check(el);
    });

  };

})(window);
