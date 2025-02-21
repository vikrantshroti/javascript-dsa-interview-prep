/**
Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is
the smallest in lexicographical order
among all possible results.

Example 1:
Input: s = "bcabc"
Output: "abc"

Example 2:
Input: s = "cbacdcbc"
Output: "acdb"

Constraints:
    1 <= s.length <= 104
    s consists of lowercase English letters.
*/

var removeDuplicateLetters = function (s) {
  const stack = [];
  const seen = new Set();
  const lastOccurrence = {};

  // Record the last occurrence of each character
  for (let i = 0; i < s.length; i++) {
    lastOccurrence[s[i]] = i;
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    // If the character is already in the stack, skip it
    if (seen.has(char)) continue;

    // Ensure the characters in the stack are in lexicographical order
    while (
      stack.length > 0 &&
      stack[stack.length - 1] > char &&
      lastOccurrence[stack[stack.length - 1]] > i
    ) {
      seen.delete(stack.pop());
    }

    stack.push(char);
    seen.add(char);
  }

  return stack.join("");
};

// Example usage
console.log(removeDuplicateLetters("bcabc")); // Output: "abc"
console.log(removeDuplicateLetters("cbacdcbc")); // Output: "acdb"
