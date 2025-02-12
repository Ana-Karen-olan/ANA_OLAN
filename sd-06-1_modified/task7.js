//Car


function Car(make, model, year, color, doors, mileage, engineType) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.doors = doors;
    this.mileage = mileage;
    this.engineType = engineType;
}

const car = new Car(
    process.argv[2], // make
    process.argv[3], // model
    process.argv[4], // year
    process.argv[5], // color
    process.argv[6], // doors
    process.argv[7], // mileage
    process.argv[8]  // engineType
);

console.log(car);

