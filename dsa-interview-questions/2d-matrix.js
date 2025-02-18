// We are given a 2D matrix and we need to set the entire row and column to zero if an element in the matrix is zero.
// Input:
// 1, 3, 4 5, 0, 5 9, 8, 8
// Output:
// 1, 0, 4 0, 0, 0 9, 0, 8

function setZerosInRowsColumns(inputMatrix) {
  const rows = new Set();
  const cols = new Set();

  // Identify which rows and columns need to be filled with zeros
  for (let i = 0; i < inputMatrix.length; i++) {
    for (let j = 0; j < inputMatrix[i].length; j++) {
      if (inputMatrix[i][j] === 0) {
        rows.add(i); // Mark row for setting all zeros
        cols.add(j); // Mark column for setting all zeros
      }
    }
  }

  // Set the entire row and column to zero
  for (let i = 0; i < inputMatrix.length; i++) {
    for (let j = 0; j < inputMatrix[i].length; j++) {
      if (rows.has(i) || cols.has(j)) {
        inputMatrix[i][j] = 0;
      }
    }
  }

  return inputMatrix;
}

// Example usage
const inputMatrix = [
  [1, 3, 4],
  [5, 0, 5],
  [9, 8, 8],
];

console.log("Output Matrix:", setZerosInRowsColumns(inputMatrix));

/*
Output:
"Output Matrix:"
[
[1,0,4],
[0,0,0],
[9,0,8]]
*/
