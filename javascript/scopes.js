var variable = 10;
function abc() {
  console.log(variable);
  var variable = 20;
  console.log(variable);
}
abc();

/**************************************************************************/

console.log(a1);
console.log(b1);
var a1 = "value";
const b1 = 3.14;
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
function abc1() {
  let a1 = (b1 = 0);
  a1++;
  return a1;
}
abc1();
console.log(typeof a1);
console.log(typeof b1);

/**************************************************************************/

console.log(a2);
console.log(b2);
var a2 = "value";
const b2 = 3.14;
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
function abc2() {
  let a2 = (b2 = 0);
  a2++;
  return a2;
}
abc2();
console.log(typeof a2);
console.log(typeof b2);

/**************************************************************************/
