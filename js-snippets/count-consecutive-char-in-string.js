function countConsecutiveCharacters(str) {
  const result = []; // To store counts of consecutive characters
  let currentChar = str[0]; // Start with the first character
  let count = 1; // Initialize count

  for (let i = 1; i < str.length; i++) {
    if (str[i] === currentChar) {
      // If the current character matches the previous, increment count
      count++;
    } else {
      // Otherwise, push the character and its count to the result
      result.push({ character: currentChar, count: count });
      currentChar = str[i]; // Update current character
      count = 1; // Reset count
    }
  }

  // Push the last character and its count
  result.push({ character: currentChar, count: count });
  return result;
}

// Example Usage
const inputString = "mississipi";
const consecutiveCounts = countConsecutiveCharacters(inputString);
console.log(consecutiveCounts);
