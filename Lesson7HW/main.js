function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let user = new User(1, 'olya', 'guru', 'guru@mail.com', '+380504433434');
console.log(user);
let users = [
    new User(1, 'olya', 'guru', 'guru@mail.com', '+380504433434'),
    new User(2, 'kolya', 'guru', 'gurukolya@mail.com', '+380504433443'),
    new User(3, 'tanya', 'stasuk', 'stasuk@mail.com', '+380984433434'),
    new User(4, 'vanya', 'stasuk', 'stasukv@mail.com', '+380984433443'),
    new User(5, 'tolya', 'sahno', 'sahno@mail.com', '+380734433434'),
    new User(6, 'lilya', 'sahno', 'sahnol@mail.com', '+380734433443'),
    new User(7, 'vika', 'mileva', 'mileva@mail.com', '+380501115566'),
    new User(8, 'lika', 'teren', 'teren@mail.com', '+380501116655'),
    new User(9, 'nika', 'gritsuk', 'gritsuk@mail.com', '+380507757755'),
    new User(10, 'venya', 'gritsuk', 'gritsukv@mail.com', '+380507755555'),
];
console.log(users);
//     -----------------------------------------------------------------------
console.log(users.filter(user => user.id %2 === 0));
//     -----------------------------------------------------------------------
console.log(users.sort((user1, user2) => user1.id - user2.id));
//     -----------------------------------------------------------------------
class Client {
        constructor(id, name, surname, email, phone, order) {
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
console.log(clients);