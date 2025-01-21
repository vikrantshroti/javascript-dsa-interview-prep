let x = 5;
let y = new Number(5);
console.log(x == y); // true
console.log(x === y); // false
console.log("x", typeof x); // Number
console.log("y", typeof y); // object

setTimeout(() => console.log("A"), 1000);
setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => console.log("C"));
Promise.resolve().then(() => setTimeout(() => console.log("D"), 0));
console.log("E");
