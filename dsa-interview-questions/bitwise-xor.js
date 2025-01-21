/*
Implement a function partialXor(a, b, c) that returns the bitwise xor of the arguments. 
The number of arguments can be 3 or fewer. If there are fewer than 3 arguments, it
should return a partial function that will take the remaining arguments. For example, 
if there are 2 arguments, it should return a partial function that takes one more argument. 
When a 3" argument is supplied, it finally returns the xor of all 3 arguments.
For example, a=6, b=8, and c=10. Their bitwise xor equals 4. Whether the call is partialXor(6,8)(10), 
partialXor(6)(8,10), or partialXor()(6,8,10), it should return 4.
Constraints
e 1<a=<1000.
e 1<b<1000.
e 1<c<1000.
» Sample Case 0
Sample Input For Custom Testing
1
2
3
Sample Output
0
Explanation
Here a=1,b=2, and c=3. The bitwise xor of the integers is 0.
*/
function partialXor(a, b, c) {
  const args = [a, b, c].filter((arg) => arg !== undefined);

  if (args.length === 3) {
    return args[0] ^ args[1] ^ args[2]; // Return XOR of all three arguments
  }

  return (...newArgs) => partialXor(...args, ...newArgs); // Return a partial function
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
  const a = parselnt(readLine().trim(), 10);
  const b = parseInt(readLine().trim(), 10);
  const c = parselnt(readLine().trim(), 10);
  const result = partialXor(a, b, c);
  try {
    if (
      result === partialXor(a, b)(c) &&
      result === partialXor(a)(b, c) &&
      result === partialXor()(a, b, c)
    ) {
      ws.write(result + "\n");
    } else {
      console.error("Function not returning correct XOR.");
    }
  } catch {
    ws.write("Function not returning partial function.");
  }
  ws.end();
}
