let arr = [1, 2, 3, 4, 5];
let sum = 0;
sum = arr.reduce((a, b) => (a += b), 0);
console.log(sum);

// [0,1,2,3,4,5].filter(d => {
//     if(d % 2 === 0) return true;
// })

// [0,1,2,3,4,5].map(d => {
//     return d%2;
// })

// let arr = [1,2,3,4,5];
// let sum =0;
// sum = arr.reduce((a, b) => {
//     return a+=b;
// },0)
// console.log(sum);

// let a = 1;
// let b = 2;
// let c = 3;
// [a,b,c] = [b,c,a];
// console.log(a,b,c);

// const val = [10,21,53];
// const valtwo = val.map(function(el){
//     return el ** 1.5;
// })
// console.log(valtwo)
