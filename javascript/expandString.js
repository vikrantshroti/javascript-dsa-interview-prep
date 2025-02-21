// Input: a10b4c3d5
// Output: aaaaaaaaaabbbbcccddddd

function expandString(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (isNaN(str[i])) {
      let char = str[i];
      let numStr = "";

      // Move to the next character to find the number
      for (let j = i + 1; j < str.length && !isNaN(str[j]); j++) {
        numStr += str[j];
        i = j; // Update i to the last digit's position
      }

      // Repeat the character 'numStr' times and add to the result
      result += char.repeat(parseInt(numStr));
    }
  }

  return result;
}

console.log(expandString("a10b4c3d5")); // Output: aaaaaaaaaabbbbcccddddd
