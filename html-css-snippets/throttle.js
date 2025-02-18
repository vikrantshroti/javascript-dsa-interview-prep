function throttle(func, delay) {
  let lastTime = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastTime >= delay) {
      func.apply(this, args);
      lastTime = now;
    }
  };
}

// Using throttle function to listen to scroll events
window.addEventListener("scroll", throttle(handleScroll, 100)); // 100ms interval
/**************************************************************************/

function throttle(func, limit) {
  let inThrottle;
  return function () {
    if (!inThrottle) {
      func();
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
window.addEventListener(
  "scroll",
  throttle(function () {
    // Handle scroll
  }, 250)
);
