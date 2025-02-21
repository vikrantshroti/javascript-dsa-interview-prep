var str = "Hello World"
//output = "olleH dlroW"

// split 2 words
var strSplit = str.split(" ");
console.log(strSplit)


// function to loop from last to first
function reverse(str){
    revStr = [];
    for(var i = str.length; i>= 0 ; i--){
        revStr.push(str[i]);
    }
    return revStr.join("");
}

const revStr1 = reverse(strSplit[0]);
const revStr2 = reverse(strSplit[1]);
// join 2 words
console.log(revStr1 + " " + revStr2)
