// function chunk(array, size) {
//     let chunked = [];

//     for (let element of array) {
//         const last = chunked[chunked.length - 1];

//         if(!last || last.length === size){
//             chunked.push([element]);
//         } else {
//             last.push(element);
//         }
//     }
//     return chunked;
// }

function chunk(array, size) {
    let chunked = [];
    let index = 0;

    while(index < array.length){
        chunked.push(array.slice(index, index + size));
        index = index + size;
    }

    return chunked;
}

chunk([2,3,5], 2);