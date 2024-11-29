/*
index of matching / closing brackets
Input: {()[]{}}[]([]) 
Output: (0,7), (1,2) (3,4) (5,6) (8,9) (10,13) (11,12)
*/

function findMatchingBrackets(s) {
  // Dictionary for matching brackets
  const matchingBrackets = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  const stack = []; // Stack to hold opening brackets and their indices
  const pairs = []; // Array to store the pairs of indices

  // Iterate through the string
  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (matchingBrackets[char]) {
      // If it's an opening bracket, push to stack
      stack.push([char, i]);
    } else if (Object.values(matchingBrackets).includes(char)) {
      // If it's a closing bracket, check for a match
      const top = stack[stack.length - 1];
      if (top && matchingBrackets[top[0]] === char) {
        const [_, openingIndex] = stack.pop();
        pairs.push([openingIndex, i]);
      }
    }
  }

  return pairs;
}

// Test the function
const inputString = "{()[]{}}[]([])";
const output = findMatchingBrackets(inputString);
console.log(output);
