function func() {
  let x = (y = 0);

  return function (a, b) {
    x++;

    y++;

    return a + b;
  };
}

let func1 = func();

console.log(func1(1, 2)); // 3

console.log(x); // Undefined

console.log(y); // 1

/**************************************************************************/
function func() {
  let x = 0;

  return function (msg) {
    console.log(`${++x} :: ${msg}`);
  };
}

let print = func();

console.log(print("Hello")); // 1::Hello

console.log(print("World")); // 2::World

console.log(print("Hello World")); //3:: Hello World

/**************************************************************************/

[1, 2, 3, 4].forEach(async (item) => {
  console.log(item);

  await delay(10000);

  console.log("After Delay");
});

function delay(timeout) {
  return new Promise(function (res, rej) {
    setTimeout(res);
  }, timeout);
}

/**************************************************************************/

const func1 = () => console.log(arguments.length);

const func2 = function () {
  console.log(arguments.length);
};

func1([1, 2, 3]); // error

func2([1, 2, 3]); // 1

/**************************************************************************/

function doReverse(p1) {
  return p1.split("").reverse().join("");
}

function someFunction(p1, p2, p3) {
  p1 = doReverse(p1);
  p2 = ["1", "2", "3"];
  p3.push("9999");
}

let a = "xyz";
let b = ["123", "567"];
let c = ["abc", "def"];

someFunction(a, b, c);

console.log(a);
console.log(b);
console.log(c);

/**************************************************************************/

var number = 10;

var display = function () {
  console.log(number);
  var number = 20;
};

display();

/**************************************************************************/

async function callMe() {
  console.log(1);
  await crazyFunction();
  console.log(3);
}

function crazyFunction() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log(2);
    }, 1000);
  });
}

callMe();

/**************************************************************************/

function someFunc() {
  x = 12;
  console.log(x);
  var x = 10;
}

/**************************************************************************/

var dwayne = {},
  daniel = { firstName: "Daniel" },
  jason = { key: "jason" };
dwayne[daniel] = 123;
dwayne[jason] = 456;
console.log(dwayne[daniel]);

/**************************************************************************/

let i;
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  };
  setTimeout(log, 100);
}

/**************************************************************************/

const carDetails = {
  name: "Tomer",
  getName() {
    return this.name;
  },
};
var name = "Joe";
var getCarName = carDetails.getName;
console.log(getCarName());

/**************************************************************************/

console.log(1 + "1"); // 11
console.log(9 - "1"); // 8
// console.log(7>6>5);

/**************************************************************************/

function foo() {
  let a;
  window.b = 0;
  a = window.b;
  a++;
  return a;
}

foo();
typeof a; // => 'undefined'
typeof window.b; // => 'number'

/**************************************************************************/
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

/**************************************************************************/
for (var i = 1; i <= 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}
// 6 6 6 6 6

/**************************************************************************/
