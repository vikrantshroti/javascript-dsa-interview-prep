async function callMe() {
  console.log(1);
  await crazyFunction();
  console.log(3);
}

function crazyFunction() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log(2);
    }, 1000);
  });
}

callMe();
