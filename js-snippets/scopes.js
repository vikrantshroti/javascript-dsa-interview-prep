var variable = 10;
function abc() {
  console.log(variable);
  var variable = 20;
  console.log(variable);
}
abc();

/**************************************************************************/

console.log(a);
console.log(b);
var a = "value";
const b = 3.14;
(function () {
  console.log(1);
  setTimeout(function () {
    console.log(2);
  }, 1000);
  setTimeout(function () {
    console.log(3);
  }, 0);
  console.log(4);
})();
function abc() {
  let a = (b = 0);
  a++;
  return a;
}
abc();
console.log(typeof a);
console.log(typeof b);

/**************************************************************************/

console.log(a);
console.log(b);
var a = "value";
const b = 3.14;
(function () {
  console.log(1);
  setTimeout(function () {
    console.log(2);
  }, 1000);
  setTimeout(function () {
    console.log(3);
  }, 0);
  console.log(4);
})();
function abc() {
  let a = (b = 0);
  a++;
  return a;
}
abc();
console.log(typeof a);
console.log(typeof b);

/**************************************************************************/
