// problem statement: https://www.geeksforgeeks.org/largest-rectangular-area-in-a-histogram-using-stack/

function getMaxArea(hist) {
  let n = hist.length;
  let res = 0;

  // Consider every bar one by one
  for (let i = 0; i < n; i++) {
    let curr = hist[i];

    // Traverse left while we have a greater height bar
    let j = i - 1;
    while (j >= 0 && hist[j] >= hist[i]) {
      curr += hist[i];
      j--;
    }

    // Traverse right while we have a greater height bar
    j = i + 1;
    while (j < n && hist[j] >= hist[i]) {
      curr += hist[i];
      j++;
    }

    res = Math.max(res, curr);
  }

  return res;
}

// Driver code
let hist = [60, 20, 50, 40, 10, 50, 60];
console.log(getMaxArea(hist));
