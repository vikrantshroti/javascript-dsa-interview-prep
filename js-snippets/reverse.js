function reverse1(str) {
    return str.split("").reverse().join('');
}

function reverse2(str) {
    let reversed = '';
    for (let character of str) {
        reversed = character + reversed;
    }
    return reversed;
}

function reverse3(str){
    return str.split('').reduce((char, rev) => rev + char, '');
}

function reverseInt(n) {
    const sign = Math.sign(n);
    return parseInt(n.toString().split("").reverse().join("")) * sign;
    
}

// reverse1('apple');
// reverse2('apple');
// reverse3('apple');

reverseInt(-20);