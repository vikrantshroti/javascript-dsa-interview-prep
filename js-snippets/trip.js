// TC- 1: trips = [[3,3,7], [2,1,5]], capacity = 4
// O/P - false

// TC - 2: trips = [[2,1,5],[3,3,7]], capacity = 5
// O/P - true

// TC - 3: [[9,3,6],[8,1,7],[6,6,8],[8,4,9],[4,2,9]], capacity = 28
// [817][429][9,3,6][8,4,9][6,6,8]

// [          3,          ,     3       ,    7      ]
// no of person to pickup , pickup point, drop point

// step1: first traverse 2 array - arrTrip1 and arrTrip2
// step2: sort on basis of pickup point
// step3: now check for modified capacity : next pickup point <= drop point
// step4: calculate capactity = nop1 - nop2 >= modified capacity || capacity
// step5: return true or false if it can be fulfilled

// const trip1 = { "trips" : [[3,3,7], [2,1,5]], "capcaity": 4}
// const trip2 = { "trips" : [[2,1,5], [3,3,7]], "capcaity": 5}

// function calculateTrip(tripObj){
// //   console.log(tripObj);
//   let tripArr = tripObj["trips"];
//   console.log(tripArr);
//   for(let i=0; i < tripArr.length; i++){
//     if(tripArr[i+1]){
//     let isCapacityModified = tripArr[i+1][1] <= tripArr[i][2];
//     console.log(isCapacityModified);
//     }

//   }
// }

// calculateTrip(trip1);
// calculateTrip(trip2);
