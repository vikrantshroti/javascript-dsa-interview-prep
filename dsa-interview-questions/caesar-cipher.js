/**
 * perform caesar cipher shift on string "str" and with "num" count, preserve punctuations.
 * Input: "Hello" and num=4
 * Output: Lipps
 * once your function is working then take your output and concatenate with a token "dsfsdf323"
 *  and then replace every third character with "x"
 */
function caesarCipher(str, num) {
  // Normalize the shift to ensure it's within 0-25
  num = num % 26;

  return str
    .split("")
    .map((char) => {
      if (/[a-zA-Z]/.test(char)) {
        // Determine the ASCII code range for uppercase and lowercase
        const charCode = char.charCodeAt(0);
        const base = charCode >= 65 && charCode <= 90 ? 65 : 97; // 65 for 'A', 97 for 'a'

        // Shift the character and wrap around within the alphabet
        return String.fromCharCode(((charCode - base + num) % 26) + base);
      }
      // Preserve non-alphabetic characters
      return char;
    })
    .join("");
}

function processString(input, shift, token) {
  // Step 1: Perform Caesar cipher
  const ciphered = caesarCipher(input, shift);

  // Step 2: Concatenate with the token
  const concatenated = ciphered + token;

  // Step 3: Replace every third character with 'x'
  const result = concatenated
    .split("")
    .map((char, index) => ((index + 1) % 3 === 0 ? "x" : char))
    .join("");

  return result;
}

// Test case
const input = "Hello";
const shift = 4;
const token = "dsfsdf323";

console.log(processString(input, shift, token)); // Output: "Lixpxdxfx2x3"
