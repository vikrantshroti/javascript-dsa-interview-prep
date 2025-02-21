const OMITTED_WORDS = ["a", "the", "and", "or", "but"];
const input = "This is a test of the filter function and it works well";

// Convert the input string into an array of words
const words = input.split(" ");

// Filter out the omitted words
const filteredWords = words.filter(
  (word) => !OMITTED_WORDS.includes(word.toLowerCase())
);

// Join the filtered words back into a string
const result = filteredWords.join(" ");

console.log(result);
// Output: "This is test of filter function it works well"
