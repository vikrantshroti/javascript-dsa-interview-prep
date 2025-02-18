function reverseString(str) {
  const iterator = {
    [Symbol.iterator]: function () {
      let index = str.length - 1;
      return {
        next: function () {
          if (index >= 0) {
            return { value: str[index--], done: false };
          } else {
            return { done: true };
          }
        },
      };
    },
  };

  let reversedStr = "";
  for (let char of iterator) {
    reversedStr += char;
  }

  return reversedStr;
}

// Example usage
console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("world")); // Output: "dlrow"
