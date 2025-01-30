//  Find pairs, given array find pairs which sum up to target
//  * Input: [1,2,3,4,5]
//  * Target: 5
//  * Output: [1,4] [2,3]
function findPairs(arr, target) {
  const result = [];
  const seen = new Set();

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];

    if (seen.has(complement)) {
      result.push([complement, arr[i]]);
    }

    seen.add(arr[i]);
  }

  return result;
}
console.log(findPairs([1, 2, 3, 4, 5], 5)); // Output: [[1, 4], [2, 3]]
