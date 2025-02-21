function func() {
  let x = (y = 0);

  return function (a, b) {
    x++;

    y++;

    return a + b;
  };
}

let func11 = func();

console.log(func11(1, 2)); // 3

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

let i1;
for (i1 = 0; i1 < 3; i1++) {
  const log = () => {
    console.log(i1);
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
x = 5;
var x;
(function fun() {
  {
    let x = 1;
    x++;
    console.log(x);
  }
  console.log(x);
})();
// 2,5
/**************************************************************************/
setTimeout(() => {
  console.log("Hi");
}, 0);
console.log("Hello");
// Hello Hi
/**************************************************************************/
var x = 5;
x = 0;
setTimeout(() => {
  console.log(x);
});
console.log("Hello");
x = x + 1;
// Hello 1
/**************************************************************************/
fun2();
console.log(x);
console.log(y);
fun1();
const fun1 = () => {
  console.log("fun1");
};
function fun2() {
  console.log("fun2");
}
var x = 5;
let y = 7;
// fun2 and reference error (var is hoisted, let is not)
/**************************************************************************/
function compute() {
  const condition = true;
  if (condition) {
    let a = false;
    let b = false;
  }
  return {
    a: a || null,
    b: b || null,
  };
}
var r = compute();
// What do you think would be the output?
console.log(r);
// reference error a is not defined
/**************************************************************************/
function Person(name) {
  this.name = name;
  var person = {
    name: "name1",
  };
  function person() {
    return {
      name: "name2",
    };
  }
  return person;
}
var names = new Person("name3");
console.log(names);
// {name: "name1"}
/**************************************************************************/
function go(n) {
  // n here is defined!
  console.log(n); // Object {a: [1,2,3]}
  for (let n of n.a) {
    // ReferenceError
    console.log(n);
  }
}
go({ a: [1, 2, 3] });
// ReferenceError: Cannot access 'n' before initialization
/**************************************************************************/
var name = "name1";
function print(name) {
  console.log(name); // name = name1
  var name = "name2";
  console.log(name); // name = name2
}
print(name);
// name1 name2
/**************************************************************************/
function sayName() {
  setTimeout(() => {
    console.log(this.name);
  }, 1000);
}
sayName.call({
  name: "name",
});
// name
/**************************************************************************/
function sayName() {
  setTimeout(function () {
    console.log(this.school);
  }, 1000);
}
sayName.call({
  school: "JMIT",
});
// undefined
/**************************************************************************/
