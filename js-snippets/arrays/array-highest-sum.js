function modArr(arr) {
  let result = [];
  let first = -Infinity,
    second = -Infinity,
    third = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      third = second;
      second = first;
      first = arr[i];
    } else if (arr[i] > second) {
      third = second;
      second = arr[i];
    } else if (arr[i] > third) {
      third = arr[i];
    }

    if (i < 2) {
      result.push(-1);
    } else {
      result.push(first + second + third);
    }
  }

  return result;
}
console.log(modArr([2, 1, 0, 3, 4, 5])); // [-1, -1, 3, 6, 9, 12]
