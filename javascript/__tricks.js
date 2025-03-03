// easify logs
const c = console.log.bind(document);
c(123);

/**************************************************************************/
// use console.table() for arrays and objects
const users = [
  { id: 1, name: "John Doe", age: 30 },
  { id: 2, name: "Jane Smith", age: 25 },
  { id: 3, name: "Bob Johnson", age: 35 },
];
console.table(users);
const user = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  address: {
    street: "123 Main St",
    city: "Anytown",
    country: "USA",
  },
};
console.table(user);

/**************************************************************************/
// use console.time() and console.timeEnd() to measure time
console.time("myFunction");
for (let i = 0; i < 1000000; i++) {
  // Some time-consuming operation
}
console.timeEnd("myFunction");

/**************************************************************************/
// use console.group() and console.groupEnd() to group logs

// example1
console.group("User Authentication");
console.log("Checking user credentials...");
console.log("Username: johndoe");
console.log("Password: ********");
console.log("Authentication successful!");
console.groupEnd();

console.group("User Profile");
console.log("Fetching user data...");
console.log("Name: John Doe");
console.log("Email: john@example.com");
console.log("Age: 30");
console.groupEnd();

// example2
console.group("API Request");
console.log("Sending request to /api/users");

console.group("Request Headers");
console.log("Content-Type: application/json");
console.log("Authorization: Bearer token123");
console.groupEnd();

console.group("Request Body");
console.log(JSON.stringify({ userId: 123 }));
console.groupEnd();

console.log("Response received");
console.groupEnd();

/**************************************************************************/
// use console.assert() to log an error message if an assertion is false
const user1 = {
  name: "John Doe",
  age: 30,
};

console.assert(user1.age >= 18, "User must be at least 18 years old");
console.assert(user1.name.length > 0, "User name cannot be empty");

/**************************************************************************/
// console.warn() and console.error() for warnings and errors
function deprecatedFunction() {
  console.warn(
    "This function is deprecated and will be removed in the next version."
  );
  // Function implementation
}
deprecatedFunction();

try {
  // Some code that might throw an error
  throw new Error("Something went wrong!");
} catch (error) {
  console.error("An error occurred:", error.message);
}

/**************************************************************************/
// formatting console output
const name = "John";
const age = 30;
const height = 1.75;
const details = { occupation: "Developer", location: "New York" };

console.log("Name: %s, Age: %d, Height: %f", name, age, height);
console.log("Details: %o", details);

// adding custom style
console.log(
  "%cHello, World!",
  "color: blue; font-size: 20px; font-weight: bold;"
);
console.log(
  "%cRed %cGreen %cBlue",
  "color: red;",
  "color: green;",
  "color: blue;"
);

/**************************************************************************/
// use console.clear() to clear the console

/**************************************************************************/
// use console.count() to count the number of times a log is called

/**************************************************************************/
