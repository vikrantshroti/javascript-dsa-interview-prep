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
