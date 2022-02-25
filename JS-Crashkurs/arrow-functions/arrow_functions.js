/*const square = function (a) {
  return a * a;
};

const square2 = (a) => {
  return a * a;
};

//const square3 = (a) => a * a;
*/



const car = {
    model: "Fiesta",
    manufacturer: "Ford",
    fullName: () => {
        return `${this.manufacturer} ${this.model}`;
    }
}


console.log(car.fullName());
