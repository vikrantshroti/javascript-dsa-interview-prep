function validatePalindrome(str) {
  // get the total length of the words
  const len = str.length;

  // Use for loop to divide the words into 2 half
  for (let i = 0; i < len / 2; i++) {
    // validate the first and last characters are same
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(validatePalindrome("aabaa"));
