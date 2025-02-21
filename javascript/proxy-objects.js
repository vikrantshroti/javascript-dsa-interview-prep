const person = {
  name: "John",
  age: 25,
};

const handler = {
  get: function (target, property) {
    console.log(`Getting property ${property}`);
    return property in target ? target[property] : "Property not found";
  },
  set: function (target, property, value) {
    if (property === "age" && value < 0) {
      console.error("Age cannot be negative");
    } else {
      target[property] = value;
    }
  },
};
const proxyPerson = new Proxy(person, handler);
console.log(proxyPerson.name); // Logs "Getting property name" and outputs "John"
proxyPerson.age = -5; // Logs "Age cannot be negative"
