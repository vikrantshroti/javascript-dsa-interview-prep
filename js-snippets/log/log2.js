[1, 2, 3, 4].forEach(async (item) => {
  console.log(item);

  await delay(10000);

  console.log("After Delay");
});

function delay(timeout) {
  return new Promise(function (res, rej) {
    setTimeout(res);
  }, timeout);
}
