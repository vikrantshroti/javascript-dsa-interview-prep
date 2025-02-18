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
/**************************************************************************/
//  Given an array of numbers, write a function that returns the largest number
//  Input: [1, 5, 3, 9, 2]
//  Output: 9
function findLargest(arr) {
  return Math.max(...arr);
}

console.log(findLargest([1, 5, 3, 9, 2])); // 9
/**************************************************************************/
// Given an array of numbers, write a function that returns the second-largest number.
// Input: [1, 5, 3, 9, 7]
// Output: 7
function secondLargest(arr) {
  let sorted = arr.sort((a, b) => b - a);
  return sorted[1];
}

console.log(secondLargest([1, 5, 3, 9, 7])); // 7
/**************************************************************************/
// Write a function that takes an array and returns a new array with duplicates removed.
// Input: [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 2, 3, 4, 5]
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
/**************************************************************************/
// Given two sorted arrays, write a function that merges them into one sorted array.
// Input: [1, 3, 5], [2, 4, 6]
// Output: [1, 2, 3, 4, 5, 6]
function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2).sort((a, b) => a - b);
}

console.log(mergeArrays([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]
/**************************************************************************/
// Write a function to rotate an array k times to the right.
// Input: [1, 2, 3, 4, 5], k = 2
// Output: [4, 5, 1, 2, 3]
function rotateArray(arr, k) {
  k = k % arr.length; // Handle cases where k > array length
  return arr.slice(-k).concat(arr.slice(0, -k));
}

console.log(rotateArray([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]
/**************************************************************************/
// Write a function that checks if two arrays are equal.
// Two arrays are considered equal if they contain the same elements in the same order.
// Input: [1, 2, 3], [1, 2, 3]
// Output: true
function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
}

console.log(arraysEqual([1, 2, 3], [1, 2, 3])); // true
console.log(arraysEqual([1, 2, 3], [1, 2, 4])); // false
/**************************************************************************/
// Given an array of integers and a target sum, write a function that finds all pairs of numbers
//  in the array that add up to the target sum. Each pair should be unique,
// and the order of numbers in the pair does not matter.
// Input: [2, 4, 3, 5, 7, 8, 9], Target = 10
// Output: [[3, 7], [2, 8], [1, 9]]
function findPairs(arr, target) {
  let result = [];
  let seen = new Set();

  for (let num of arr) {
    let complement = target - num;

    if (seen.has(complement)) {
      result.push([num, complement]);
    }

    seen.add(num);
  }

  return result;
}

console.log(findPairs([2, 4, 3, 5, 7, 8, 9], 10)); // [[7, 3], [8, 2], [9, 1]]
/**************************************************************************/
