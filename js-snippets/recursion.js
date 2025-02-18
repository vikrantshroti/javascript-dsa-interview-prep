function reverseString(str) {
  // Base case: if the string is empty or has only one character, return it
  if (str.length <= 1) {
    return str;
  }

  // Recursive case: return the last character + reverse of the rest of the string
  return str[str.length - 1] + reverseString(str.slice(0, -1));
}

// Example usage
console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("world")); // Output: "dlrow"
