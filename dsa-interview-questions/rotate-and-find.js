// # [3, 4, 5, 1, 2] ## [7, 1, 2, 3, 4, 5, 6]
function rotateAndFind(arr, num) {
  // Helper function to perform binary search
  const binarySearch = (arr, target, start, end) => {
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return -1;
  };

  // Find the rotation point using binary search
  const findRotationPoint = (arr) => {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
      const mid = Math.floor((start + end) / 2);
      if (arr[mid] > arr[end]) {
        start = mid + 1;
      } else {
        end = mid;
      }
    }
    return start;
  };

  const rotationPoint = findRotationPoint(arr);

  // Perform binary search in the appropriate subarray
  if (num >= arr[rotationPoint] && num <= arr[arr.length - 1]) {
    return binarySearch(arr, num, rotationPoint, arr.length - 1);
  } else {
    return binarySearch(arr, num, 0, rotationPoint - 1);
  }
}
console.log(rotateAndFind([3, 4, 5, 1, 2], 4));
console.log(rotateAndFind([7, 1, 2, 3, 4, 5, 6], 4));
console.log(rotateAndFind([1, 2, 4, 8, 12], 8));
console.log(rotateAndFind([1, 2, 4, 8, 12], 7));
