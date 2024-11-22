const carDetails = {
  name: "Tomer",
  getName() {
    return this.name;
  },
};
var name = "Joe";
var getCarName = carDetails.getName;
console.log(getCarName());
