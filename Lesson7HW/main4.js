class Cinderella {
    constructor(name, age, footSize){
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
let cinderellas = [
new Cinderella('jane', 18, 35),
new Cinderella('kate', 19, 36),
new Cinderella('ann', 20, 37),
new Cinderella('jasmine', 21, 38),
new Cinderella('dolly', 22, 39),
new Cinderella('jacky', 23, 40),
new Cinderella('pam', 24, 41),
new Cinderella('penelopa', 25, 42),
new Cinderella('diana', 26, 43),
new Cinderella('lara', 27, 44),
];
class Prince {
    constructor(name, age, shoes){
        this.name = name;
        this.age = age;
        this.shoes = shoes;
    }
}
let prince = new Prince('dave', 30, 36);
for (const cinderella of cinderellas) {
    if (cinderella.footSize === prince.shoes) {
    prince.princess = cinderella;
    }
}
console.log(cinderellas);
console.log(prince.princess); 
const princess = cinderellas.find(cinderella=> cinderella.footSize === prince.shoes);
prince.mate = princess;
console.log(prince.mate);
//----------------------------------------------
Array.prototype.myForEach = function(callback) {
    const yourArray = this
    for (const item of yourArray) {
        callback(item);}
};
const arr = [17, 7, 1991];
arr.myForEach((i) => console.log(i));

Array.prototype.myFilter = function(callback) {
    const arr = [];
        for (const item of this) {
        if (callback(item)) {
            arr.push(item);}
    }
    return arr;
};
const result = cinderellas.myFilter((cinderella) => cinderella.footSize === 36);
console.log(result);
