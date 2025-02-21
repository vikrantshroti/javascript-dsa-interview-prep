console.log(
  generateNewfolder(["new folder", "new folder(3)", "new folder(4)"])
);
// Expected output: ["new folder", "new folder(3)", "new folder(4)", "new folder(1)"]

function generateNewfolder(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }

  const baseName = "new folder";
  let newName = baseName;
  let counter = 1;

  const nameSet = new Set(arr);

  while (nameSet.has(newName)) {
    newName = `${baseName}(${counter})`;
    counter++;
  }

  return [...arr, newName];
}

// Example usage
console.log(
  generateNewfolder(["new folder", "new folder(3)", "new folder(4)"])
); // Output: ["new folder", "new folder(3)", "new folder(4)", "new folder(1)"]

console.log(
  generateNewfolder(["new folder", "new folder(1)", "new folder(2)"])
); // Output: ["new folder", "new folder(1)", "new folder(2)", "new folder(3)"]

console.log(
  generateNewfolder([
    "new folder",
    "new folder(1)",
    "new folder(2)",
    "new folder(3)",
  ])
); // Output: ["new folder", "new folder(1)", "new folder(2)", "new folder(3)", "new folder(4)"]
