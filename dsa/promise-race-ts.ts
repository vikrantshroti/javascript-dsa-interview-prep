/* The problem requires you to implement a generator function 
    promiseAccumulation that processes an array of promises (promiseArr). 
    The function needs to:
        Yield the resolved value of each promise.
        Yield -1 and stop processing if a promise is rejected.
    Input: const promises = [
                Promise.resolve(10),
                Promise.reject(),
                Promise.resolve(20)
            ];
    Output: 10, -1
*/

async function* promiseAccumulation(
  promiseArr: Promise<number>[]
): AsyncGenerator<number> {
  // solution
  for (const promise of promiseArr) {
    try {
      const result = await promise; // Await the resolution of the promise
      yield result; // Yield the resolved value
    } catch (error) {
      yield -1; // Yield -1 if the promise is rejected
      return; // Stop yielding further values
    }
  }
}

async function main() {
  const ws: WriteStream = createWriteStream(process.env["OUTPUT_PATH"]);

  let n: number = parseInt(readLine().trim());
  let pArr: Promise<number>[] = [];
  for (let i = 0; i < n; i++) {
    let x: number = parseInt(readLine().trim());
    pArr.push(promiseReturn(x));
  }

  for await (let i of promiseAccumulation(pArr)) {
    ws.write(i + "\n");
    if (i === -1) {
      break;
    }
  }

  ws.end();
}
