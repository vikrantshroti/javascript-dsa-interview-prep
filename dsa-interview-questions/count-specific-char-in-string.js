function countCharacter(str, char) {
  // Ensure the input character is a single character
  if (char.length !== 1) {
    throw new Error("Please provide a single character to count.");
  }

  // Count occurrences of the character
  return [...str].filter((c) => c === char).length;
}

// Example Usage
const inputString = "mississipi";
const characterToCount = "s";

const count = countCharacter(inputString, characterToCount);
console.log(
  `The character '${characterToCount}' appears ${count} times in '${inputString}'.`
);
