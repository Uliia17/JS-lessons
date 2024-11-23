let block = document.createElement('div');
document.body.appendChild(block);
block.classList.add('wrap', 'collapse', 'alpha', 'beta');
block.textContent = 'wrap, collapse, alpha, beta'
let cloneNode = block.cloneNode(true);
document.body.appendChild(cloneNode);
//-------------------------------------------
let array = ['Main','Products','About us','Contacts'];
let ul = document.createElement('ul');
for (const item of array) {
let li = document.createElement('li');
li.textContent = item;
ul.appendChild(li);
}
document.body.appendChild(ul);
//------------------------------------------- 
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const course of coursesAndDurationArray) {
    let div = document.createElement('div');
    div.innerText = `${course.title} ${course.monthDuration}`;
    document.body.appendChild(div);
}
