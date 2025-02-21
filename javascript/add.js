main();

function main() {
  console.log(add(1, 2));

  console.log(add1(1, 2));

  console.log(add2(1, 2));
}

function add2(a, b) {
  return a + b;
}

var add = (a, b) => a + b;

var add1 = function (a, b) {
  return a + b;
};
