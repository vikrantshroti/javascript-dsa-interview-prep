// let promise = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve("done!"), 1000);
// });
// promise.then(
//   (result) => console.log(result),
//   (error) => console.log(error)
// );

/**************************************************************************/

// let x = 5;
// let y = new Number(5);
// console.log(x == y); // true
// console.log(x === y); // false
// console.log("x", typeof x); // Number
// console.log("y", typeof y); // object

// setTimeout(() => console.log("A"), 1000);
// setTimeout(() => console.log("B"), 0);
// Promise.resolve().then(() => console.log("C"));
// Promise.resolve().then(() => setTimeout(() => console.log("D"), 0));
// console.log("E");

/**************************************************************************/

// const promise1 = Promise.resolve('First');
// const promise2 = Promise.resolve('second');
// const promise3 = Promise.resolve('third');
// const promise4 = Promise.resolve('fourth');

// const runPrmoses = async () => {
//     const res1 = await Promise.all([promise1, promise2])
//         const res2 = await Promise.all([promise3, promise4])
//     return [res1, res2]
// }

// runPrmoses().then(res => console.log(res)).catch(err => console.log(err))

/**************************************************************************/

// new Promise((resolve, reject) => {
//   resolve(1)
//   resolve(2)
//   reject('error')
// }).then((value) => {
//   console.log(value)
// }, (error) => {
//   console.log('error')
// })
// output: 1

/**************************************************************************/

// console.log(1);
// const promise = new Promise((resolve) => {
//   console.log(2);
//   resolve();
//   console.log(3);
// });

// console.log(4);

// promise
//   .then(() => {
//     console.log(5);
//   })
//   .then(() => {
//     console.log(6);
//   });

// console.log(7);

// setTimeout(() => {
//   console.log(8);
// }, 10);

// setTimeout(() => {
//   console.log(9);
// }, 0);
// output: 1 2 3 4 7 5 6 9 8

/**************************************************************************/

// Promise.resolve(1)
// .then(() => 2)
// .then(3)
// .then((value) => value * 3)
// .then(Promise.resolve(4))
// .then(console.log)
// output: 6

/**************************************************************************/

// Promise.resolve(1)
//   .then((val) => {
//     console.log(val);
//     return val + 1;
//   })
//   .then((val) => {
//     console.log(val);
//   })
//   .then((val) => {
//     console.log(val);
//     return Promise.resolve(3).then((val) => {
//       console.log(val);
//     });
//   })
//   .then((val) => {
//     console.log(val);
//     return Promise.reject(4);
//   })
//   .catch((val) => {
//     console.log(val);
//   })
//   .finally((val) => {
//     console.log(val);
//     return 10;
//   })
//   .then((val) => {
//     console.log(val);
//   });
// output: 1 2 undefined 3 undefined 4 undefined undefined

/**************************************************************************/

// const p1 = Promise.resolve(1);
// const p2 = new Promise((resolve) => resolve(p1));
// const p3 = Promise.resolve(p1);
// const p4 = p2.then(() => new Promise((resolve) => resolve(p3)));
// const p5 = p4.then(() => p4);
// console.log(p1 == p2);
// console.log(p1 == p3);
// console.log(p3 == p4);
// console.log(p4 == p5);
// output: false true false false

/**************************************************************************/
