// Find the contiguous subarray within an array, A of length N which has the largest sum.
// Input 1:
// A = [1, 2, 3, 4, -10]
// Output 1: 10

// Input 2:
// A = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output 2: 6

function maxSubArray(A) {
  let maxSoFar = A[0];
  let maxEndingHere = A[0];

  for (let i = 1; i < A.length; i++) {
    maxEndingHere = Math.max(A[i], maxEndingHere + A[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}

// Example usage
console.log(maxSubArray([1, 2, 3, 4, -10])); // Output: 10
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6
console.log(maxSubArray([-2, -3, 4, -1, -2, 1, 5, -3])); // Output: 7
