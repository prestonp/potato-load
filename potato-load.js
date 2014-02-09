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

  window.potatoload = function(selector) {

    // Get DOM objects
    var elements = Array.prototype.slice.call(document.querySelectorAll(selector));

    // Save previous scroll fn
    this.scrollFns = window.onscroll ? [window.onscroll] : [];

    // Attach to scroll events
    elements.forEach(function(el, idx) {
      scrollFns.push(check.bind(this, el));
      check(el); // show images on init
    });

    // Invoke series of scrolling fns
    window.onscroll = function() {
      this.scrollFns.forEach(function(fn) {
        fn();
      });
    };

  };
})(window);
