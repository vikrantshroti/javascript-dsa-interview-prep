// Given a dictionary and a string, return if the string can be space-separated into words in the dictionary.
// Consider the below example to understand the problem better:
// Example input Input String = "helloworldhe"; Dictionary = { "he": true, "hell": true, "hello": true, "world": true };
// Output: "hello world he"

function canWeSegmentString(inputString, dictionary) {
  // Helper function to recursively check the segmentation
  function checkStringsRecursively(index, currentSentence) {
    console.log("index", index);
    console.log("currentSentence", currentSentence);
    // If we've reached the end of the string, return the current sentence
    if (index === inputString.length) {
      return currentSentence.trim();
    }

    let word = "";

    // Build words starting from the current index
    for (let i = index; i < inputString.length; i++) {
      word += inputString[i];
      console.log("word:", word);
      // Check if the word exists in the dictionary
      if (dictionary[word]) {
        const result = checkStringsRecursively(
          i + 1,
          currentSentence + word + " "
        );
        console.log("result:", result);
        if (result) return result; // Return the result if valid
      }
    }

    // If no segmentation is possible, return null
    return null;
  }

  // Start the segmentation process
  const result = checkStringsRecursively(0, "");

  // Return the result or indicate segmentation isn't possible
  return result || "Segmentation not possible";
}

// Example input
let inputString = "helloworldhe";
let dict = {
  he: true,
  hell: true,
  hello: true,
  world: true,
};

console.log("Output: ", canWeSegmentString(inputString, dict));
