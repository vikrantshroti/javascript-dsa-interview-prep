// function debounce(func, delay) {
//   let timer;
//   return function (...args) {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       func.apply(this, args);
//     }, delay);
//   };
// }

// // usage
// function searchQuery(query) {
//   console.log("Searching for:", query);
// }

// const debouncedSearch = debounce(searchQuery, 300);
// document.getElementById("search").addEventListener("input", (e) => {
//   debouncedSearch(e.target.value);
// });

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
