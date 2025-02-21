// function getName() {
//   return;
//   ("name");
// }
// console.log(getName());

/**************************************************************************/

// function makeAdder(x) {
//     return function(y) {
//         return x + y;
//     }
// }

// const increment = makeAdder(1);
// const x = increment(9);
// console.log(x);

// var counter = (function(){
//     let _private_count = 0;
//     function inc(x) {
//         _private_count = _private_count + x;
//     }
//     return {
//         incOne: () => {
//             inc(1);
//         },
//         decOne: () => {
//             inc(-1)
//         },
//         value: () => _private_count
//     }
// })();

// console.log(counter.value());
// counter.incOne()
// counter.incOne();
// console.log(counter.value());
// counter.decOne();
// console.log(counter.value());

/**************************************************************************/

// Q: what can we change without modifying if condition so that it prints "Hello World"?
// a = { num: 1 };
// if (a == 1 && a == 2 && a == 3) {
//  console.log("Hello World");
// }

// Answer:
// a = {
//   num: 1,
//   valueOf: function () {
//     return this.num++;
//   },
// };

// if (a == 1 && a == 2 && a == 3) {
//   console.log("Hello World");
// }

/**************************************************************************/
