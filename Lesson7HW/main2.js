class Client {
    constructor(id, name, surname, email, phone, order){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }}
let clients = [
    new Client(1, 'olya', 'guru', 'guru@mail.com', '+380504433434', [{title: 'tomato', price: 120}, {title: 'cucumber', price: 180}]),
    new Client(2, 'kolya', 'guru', 'gurukolya@mail.com', '+380504433443', [{title: 'carrot', price: 30}, {title: 'garbage', price: 40}, {title: 'cucumber', price: 180}]),
    new Client(3, 'tanya', 'stasuk', 'stasuk@mail.com', '+380984433434', [{title: 'candies', price: 340}, {title: 'cakes', price: 180}, {title: 'cucumber', price: 180}, {title: 'pork', price: 340}]),
    new Client(4, 'vanya', 'stasuk', 'stasukv@mail.com', '+380984433443', [{title: 'salad', price: 280}, {title: 'pork', price: 340}, {title: 'carrot', price: 30}, {title: 'garbage', price: 40}, {title: 'cucumber', price: 180}]),
    new Client(5, 'tolya', 'sahno', 'sahno@mail.com', '+380734433434', [{title: 'beef', price: 500}, {title: 'fish', price: 340}, {title: 'salad', price: 280}, {title: 'pork', price: 340}, {title: 'carrot', price: 30}, {title: 'garbage', price: 40}, {title: 'cucumber', price: 180}]),
    new Client(6, 'lilya', 'sahno', 'sahnol@mail.com', '+380734433443', [{title: 'bread', price: 40}, {title: 'nuts', price: 550}, {title: 'tomato', price: 120}, {title: 'cucumber', price: 180}]),
    new Client(7, 'vika', 'mileva', 'mileva@mail.com', '+380501115566', [{title: 'milk', price: 44}, {title: 'juice', price: 90}]),
    new Client(8, 'lika', 'teren', 'teren@mail.com', '+380501116655', [{title: 'water', price: 30}, {title: 'sugar', price: 50}]),
    new Client(9, 'nika', 'gritsuk', 'gritsuk@mail.com', '+380507757755', [{title: 'pasta', price: 170}, {title: 'salt', price: 30}]),
    new Client(10, 'venya', 'gritsuk', 'gritsukv@mail.com', '+380507755555', [{title: 'olive', price: 200}, {title: 'bananas', price: 70}]),
];
console.log(clients.sort((a, b) => a.order.length - b.order.length));
//----------------------------------------------------------------------------
function Car(model, manufacturer, year, maximumSpeed, engine) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maximumSpeed = maximumSpeed;
    this.engine = engine;
    this.drive = function() {
        console.log(`їдемо зі швидкістю ${this.maximumSpeed} на годину`);
    };
    this.info = function () {
    for (const key in this) {
        console.log(key, this[key])}};
    this.increaseMaxSpeed = function(newSpeed) {
        this.maximumSpeed = this.maximumSpeed + newSpeed;};
    this.changeYear = function(newValue) {
        this.year = newValue;};
    this.addDriver = function(driver) {
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