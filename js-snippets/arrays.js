// reduce
// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// sum = arr.reduce((a, b) => (a += b), 0);
// console.log(sum);

/**************************************************************************/

// filter
// [0,1,2,3,4,5].filter(d => {
//     if(d % 2 === 0) return true;
// })

/**************************************************************************/

// map
// [0,1,2,3,4,5].map(d => {
//     return d%2;
// })

/**************************************************************************/

// reduce
// let arr = [1,2,3,4,5];
// let sum =0;
// sum = arr.reduce((a, b) => {
//     return a+=b;
// },0)
// console.log(sum);

/**************************************************************************/

// slice (does not modify the original array)
const animals = ["ant", "bison", "camel", "duck", "elephant"];
console.log(animals.slice(2)); // Expected output: Array ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4)); // Expected output: Array ["camel", "duck"]
console.log(animals.slice(1, 5)); // Expected output: Array ["bison", "camel", "duck", "elephant"]
console.log(animals.slice(-2)); // Expected output: Array ["duck", "elephant"]
console.log(animals.slice(2, -1)); // Expected output: Array ["camel", "duck"]
console.log(animals.slice()); // Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

/**************************************************************************/

// splice (does modify the original array)
const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// Inserts at index 1
console.log(months); // Expected output: Array ["Jan", "Feb", "March", "April", "June"]
months.splice(4, 1, "May");
// Replaces 1 element at index 4
console.log(months); // Expected output: Array ["Jan", "Feb", "March", "April", "May"]

/**************************************************************************/

// shift (changes the length of the array)
const array1 = [1, 2, 3];
const firstElement = array1.shift();
console.log(array1); // Expected output: Array [2, 3]
console.log(firstElement); // Expected output: 1

/**************************************************************************/
// unshift
const array2 = [1, 2, 3];
console.log(array2.unshift(4, 5)); // Expected output: 5
console.log(array2); // Expected output: Array [4, 5, 1, 2, 3]

/**************************************************************************/

// push
const animals1 = ["pigs", "goats", "sheep"];
const count = animals1.push("cows");
console.log(count); // Expected output: 4
console.log(animals1); // Expected output: Array ["pigs", "goats", "sheep", "cows"]

animals1.push("chickens", "cats", "dogs");
console.log(animals1); // Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]

/**************************************************************************/

// pop
const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];
console.log(plants.pop()); // Expected output: "tomato"
console.log(plants); // Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]
plants.pop();
console.log(plants); // Expected output: Array ["broccoli", "cauliflower", "cabbage"]

/**************************************************************************/

//flat
const arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat()); // expected output: Array [0, 1, 2, 3, 4]
const arr2 = [0, 1, [2, [3, [4, 5]]]];
console.log(arr2.flat()); // expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]
console.log(arr2.flat(2)); // expected output: Array [0, 1, 2, 3, Array [4, 5]]
console.log(arr2.flat(Infinity)); // expected output: Array [0, 1, 2, 3, 4, 5]

/**************************************************************************/

// arrays assignment
// let a = 1;
// let b = 2;
// let c = 3;
// [a, b, c] = [b, c, a];
// console.log(a, b, c); // output: 2 3 1

/**************************************************************************/

// map exponentiation
// const val = [10, 21, 53];
// const valtwo = val.map(function (el) {
//   return el ** 1.5;
// });
// console.log(valtwo); // output: [ 31.622776601683793, 96.23408959407264, 385.84582413186746 ]

/**************************************************************************/

// spread operator
// const numberOne = [1, 2, 3];
// const numberTwo = [4, 5, 6];
// const numberCombined = [...numberOne, numberTwo];
// console.log(numberCombined);

/**************************************************************************/

// Find output of the following code snippet
// function printArray(a) {
//     var len = a.length,
//       i = 0;
//     if (len == 0) {
//       console.log("empty printArray");
//     } else {
//       do {
//         console.log(a[i]);
//       } while (++i < len);
//     }
//   }
//   printArray(1, 2, 3, 4); // undefined

/**************************************************************************/

// function rotateArrLeft(arr, n) {
//   for (let i = 0; i < n; i++) {
//     arr.push(arr.shift());
//   }
//   return arr;
// }
// console.log("rotateLeft: ", rotateArrLeft([1, 2, 3, 4, 5], 2)); // [3,4,5,1,2]

// function rotateArrRight(arr, n) {
//   for (let i = 0; i < n; i++) {
//     arr.unshift(arr.pop());
//   }
//   return arr;
// }
// console.log("rotateRight: ", rotateArrRight([1, 2, 3, 4, 5], 2)); // [4,5,1,2,3]

/**************************************************************************/

// function rotateArr(arr, n) {
//   // replace n with -n to rotate right
//   return arr.slice(n).concat(arr.slice(0, n));
// }
// console.log(rotateArr([1, 2, 3, 4, 5], 2)); // [3,4,5,1,2]
