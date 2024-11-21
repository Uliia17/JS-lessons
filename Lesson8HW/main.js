function cloner(obj) {
        if (obj) {
        let functions = [];
        for (const key in obj) {
            if (typeof obj[key] === 'function') {
                const functionClone = obj[key].bind({});
                functions.push({key, functionClone});
            }
        }
        const cloneObject = JSON.parse(JSON.stringify(obj));
        for (const {key, functionClone} of functions) {
            cloneObject[key] = functionClone;
        }
        console.log(cloneObject);
        return cloneObject;
    }
    throw new Error('!!!!!');
}
const clone = cloner({ id: 1, name: "John", age: undefined, address: null, score: NaN, foo() { console.log('client'); } });
clone.foo();
//-----------------------------------------------------------------
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
console.log(coursesAndDurationArray.map((course, index) => ({...course, id: index + 1})));