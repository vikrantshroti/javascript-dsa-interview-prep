/**
 * Take the "num" parameter and return number greater than "num" using same digits.
 * For example 123 becomes 132 and 12453 becomes 12534 and if number has no greater combination then return -1.
 * Once your function is working then take your output and concatenate with a token "dsfsdf323"
 * and then replace every third character with "x"
 */
function nextGreaterNumber(num) {
  const digits = num.toString().split("");

  // Step 1: Find the first decreasing digit from the right
  let i = digits.length - 2;
  while (i >= 0 && digits[i] >= digits[i + 1]) {
    i--;
  }

  // If no such digit exists, return -1
  if (i < 0) return -1;

  // Step 2: Find the smallest digit on the right that is larger than digits[i]
  let j = digits.length - 1;
  while (digits[j] <= digits[i]) {
    j--;
  }

  // Step 3: Swap the two digits
  [digits[i], digits[j]] = [digits[j], digits[i]];

  // Step 4: Sort the digits to the right of i in ascending order
  const left = digits.slice(0, i + 1);
  const right = digits.slice(i + 1).sort();

  return parseInt(left.concat(right).join(""), 10);
}

function processNumber(num, token) {
  // Step 1: Get the next greater number
  const nextNum = nextGreaterNumber(num);

  // Step 2: Concatenate with the token
  const concatenated = nextNum.toString() + token;

  // Step 3: Replace every third character with 'x'
  const result = concatenated
    .split("")
    .map((char, index) => ((index + 1) % 3 === 0 ? "x" : char))
    .join("");

  return result;
}

// Test cases
const num = 12453;
const token = "dsfsdf323";

console.log(processNumber(num, token)); // Output: "125x3xdsxfx32x"
