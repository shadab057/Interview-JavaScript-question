let vehicle = {
  wheels: "4",
  fuelType: "Gasoline",
  color: "Green",
};

let carProps = {
  type: {
    value: "Volkswagen",
    enumerable: true, // 👈 important
  },
  model: {
    value: "Golf",
    enumerable: true, // 👈 important
  },
};

var car = Object.create(vehicle, carProps);
console.log(car);
