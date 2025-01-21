let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("done!"), 1000);
});
promise.then(
  (result) => console.log(result),
  (error) => console.log(error)
);

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