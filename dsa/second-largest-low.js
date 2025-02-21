// problem statement: https://www.geeksforgeeks.org/javascript-program-to-find-second-largest-element-in-an-array/

function findSecondLargest(arr) {
  let first, second;

  // There should be at least two elements
  if (arr.length < 2) {
    return "Invalid Input";
  }

  // Sort the array in ascending order
  arr.sort();

  // Start from the second last element as
  // the largest element is at last
  for (let i = arr.length - 2; i >= 0; i--) {
    // If the element is not equal to the
    // largest element
    if (arr[i] !== arr[arr.length - 1]) {
      return "The second largest element is " + arr[i];
    }
  }

  return "There is no second largest element";
}

// Driver program to test the function
const arr = [12, 35, 10, 35, 10, 34, 1];

// Output: The second largest element is 34
console.log(findSecondLargest(arr));
