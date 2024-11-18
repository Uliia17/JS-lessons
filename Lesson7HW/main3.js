class Car {
constructor(model, manufacturer, year, maximumSpeed, engine) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maximumSpeed = maximumSpeed;
    this.engine = engine;
}
    drive () {
        console.log(`їдемо зі швидкістю ${this.maximumSpeed} на годину`);
    };
    info() {
        for (const key in this) {
            console.log(key, this[key])}};
    increaseMaxSpeed(newSpeed) {
        this.maximumSpeed = this.maximumSpeed + newSpeed;};
    changeYear(newValue) {
        this.year = newValue;};
    addDriver(driver) {
        this.driver = driver;};
}
const car= new Car('BMW X6', 'BMW AG', '2007', 236, 4395);
      console.log(car);
      car.drive();
      car.info();
      car.increaseMaxSpeed(300);
      console.log(car);
      car.changeYear('2024');
      console.log(car);
      car.addDriver({name:'Max', surname: 'Verstappen'});
      console.log(car);