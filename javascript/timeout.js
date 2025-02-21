for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log("Delay " + i);
  }, 1000 + i);
}

for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log("No Delay " + i);
  }, 0);
}
