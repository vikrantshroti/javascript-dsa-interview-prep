/**
 * You are given an array of integers, and you need to find the first missing positive integer
 * (the smallest positive integer that is not present in the array).
 * Input: const nums = [3, 4, -1, 1];
 * Output: 2
 * */
function firstMissingPositive(nums) {
  let i = 0;
  while (i < nums.length) {
    if (
      nums[i] > 0 &&
      nums[i] <= nums.length &&
      nums[nums[i] - 1] !== nums[i]
    ) {
      [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
    } else {
      i++;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }
  return nums.length + 1;
}
console.log(firstMissingPositive([3, 4, -1, 1])); //
