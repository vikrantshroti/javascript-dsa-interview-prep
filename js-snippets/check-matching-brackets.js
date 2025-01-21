function isValidParentheses(s) {
  const stack = [];
  const bracketMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of s) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      if (stack.length === 0 || stack.pop() !== bracketMap[char]) {
        return false;
      }
    }
  }

  return stack.length === 0; // Stack should be empty for a valid string
}

// Example Usage
console.log(isValidParentheses("()")); // Output: true
console.log(isValidParentheses("()[]{}")); // Output: true
console.log(isValidParentheses("(]")); // Output: false
console.log(isValidParentheses("([{}])")); // Output: true
console.log(isValidParentheses("(([[{{}}]]))")); // Output: true
console.log(isValidParentheses("((")); // Output: false

// edge case to consider
// empty string,
// single bracket,
// mismatched brackets - "(]", "({[)]}",
// extra closing bracket "())"
