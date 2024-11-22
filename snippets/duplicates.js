function areThereDuplicates(...args) {
  console.log(args);
  let obj = {};
  for (let i = 0; i < args.length; i++) {
    if (args[i] == args[i + 1]) {
      obj[args[i]] += 1;
    } else {
      obj[args[i]] = 1;
    }
  }

  for (let charObj in obj) {
  }

  return obj;
}

console.log(areThereDuplicates(1, 2, 3, 3, 3, 4, 4, 5, 6));
