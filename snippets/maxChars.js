function maxChars(str) {
    let charObj = {};
    let maxChar = ''
    let maxCount = 0;
    for (let char of str) {
        charObj[char] = charObj[char] + 1 || 1;
    }
    console.log(charObj);

    for(let char in charObj){
        if(charObj[char] > maxCount){
            maxCount = charObj[char];
            maxChar = char;
        }
    }
    return maxChar;
} 

maxChars("Hello there!!!!!");