let array = ["Apple", "orange", "mango"];

let charObj = {};
let charCount = 0;

for (fruit of array) {
  // console.log(fruit);
  for (char of fruit) {
    // console.log(char);
    charObj[char] = charCount++;
  }
}
console.log(charObj);
