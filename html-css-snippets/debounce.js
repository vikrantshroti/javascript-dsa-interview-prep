function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Using debounce function to listen to input events
const input = document.getElementById("search-input");
input.addEventListener("input", debounce(search, 500)); // 500ms delay

/**************************************************************************/

function debounce(func, delay) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(func, delay);
  };
}

window.addEventListener(
  "resize",
  debounce(function () {
    // Handle resize
  }, 250)
);
