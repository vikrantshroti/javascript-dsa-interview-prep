// Given an array of integers without reordering,
// find the maximum difference between any element in the array and any element before it.
// if there is never a lower prior element, return -1

function maxDifference(arr) {
  if (!arr || arr.length < 2) return -1;

  let minValue = arr[0];
  let maxDifference = -1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > minValue) {
      maxDifference = Math.max(maxDifference, arr[i] - minValue);
    }
    minValue = Math.min(minValue, arr[i]);
  }
  return maxDifference;
}
console.log(maxDifference([2, 3, 10, 6, 4, 8, 1])); // Output: 8 (10 - 2)
console.log(maxDifference([5, 3, 1])); // Output: -1
console.log(maxDifference([7, 1, 5, 4, 6, 2])); // Output: 5 (6 - 1)
