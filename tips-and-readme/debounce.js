function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// usage
function searchQuery(query) {
  console.log("Searching for:", query);
}

const debouncedSearch = debounce(searchQuery, 300);
document.getElementById("search").addEventListener("input", (e) => {
  debouncedSearch(e.target.value);
});

// more info: https://javascript.plainenglish.io/day-19-can-you-implement-a-debounce-function-in-javascript-d39247fdaa60
