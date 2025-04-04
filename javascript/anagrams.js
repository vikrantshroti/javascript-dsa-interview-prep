// function anagram(stringA, stringB){
//     aCharMap = buildCharMap(stringA);
//     bCharMap = buildCharMap(stringB);

//     if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
//         return false;
//     }

//     for(let char in aCharMap){
//         if(aCharMap[char] !== bCharMap[char]){
//             return false;
//         }
//     }

//     return true;

// }

// function buildCharMap(str) {
//     const charMap = {}
//     for (let char of str.replace(/[^\w]/g, '')) {
//         charMap[char] = charMap[char] + 1 || 1;
//     }
//     return charMap;
// }

function anagram(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

console.log(anagram("hello", "elloh"));
