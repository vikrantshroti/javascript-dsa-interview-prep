const sentence = "Life is good";
// find space from backwards and show index
let spaceIndex = sentence.length - 1;
console.log(spaceIndex);
while (sentence[spaceIndex] !== " ") {
  spaceIndex--;
}
console.log(spaceIndex);

// find space from backwards and show index from backwards
let spaceFromEnd1 = sentence
  .split("")
  .reverse()
  .findIndex((char) => char === " ");
console.log(spaceFromEnd1);
