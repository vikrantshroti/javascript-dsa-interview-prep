console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve()
  .then(() => {
    console.log("C");
    return Promise.resolve("D");
  })
  .then(console.log);
console.log("E");

// AECDB
