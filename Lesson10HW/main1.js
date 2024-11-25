let sessionsList = JSON.parse(localStorage.getItem('sessionsList')) || [];
let sessionsContainer = document.getElementById('sessionsContainer');
sessionsList.forEach(session => {
    let sessionDiv = document.createElement('div');
    sessionDiv.innerText = `${session.date}, ${session.time}`;
    sessionsContainer.appendChild(sessionDiv);
});
// -----------------------------------------
const kilogramsInput = document.getElementById('kilograms');
const poundsInput = document.getElementById('pounds');
const resultSpan = document.getElementById('result');
const kgToPounds = kg => kg * 2.20462;
const PoundsToKg = pounds => pounds / 2.20462;

kilogramsInput.addEventListener('input', function() {
    const kg = this.value;
    if (!isNaN(kg)) {
        const pounds = kgToPounds(kg);
        poundsInput.value = pounds.toFixed(2);
        resultSpan.textContent = `${kg} kg = ${pounds.toFixed(2)} pounds`;
    } else {
        poundsInput.value = '';
        resultSpan.textContent = '';
    }
});
poundsInput.addEventListener('input', function() {
    const pounds = this.value;
    if (!isNaN(pounds)) {
        const kg = PoundsToKg(pounds);
        kilogramsInput.value = kg;
        resultSpan.textContent = `${pounds} pounds = ${kg} кг`;
    } else {
        kilogramsInput.value = '';
        resultSpan.textContent = '';
    }
});
// -----------------------------------------
function addToLocalStorage(arrayName, objToAdd) {
    const lsItem = localStorage.getItem(arrayName);
    if (!lsItem) {
        throw new Error ('no information');
    }
    const array = JSON.parse(lsItem);
    if (typeof objToAdd === 'object') {
    array.push(objToAdd);}
    const jsonArray = JSON.stringify(array);
    localStorage.setItem(arrayName, jsonArray);
}
addToLocalStorage('sessionsList', {})
// -----------------------------------------
const tableForm = document.forms['tableForm'];
const table = document.getElementById('table');
tableForm.onsubmit = function (event) {
    event.preventDefault();
    const linesValue = +tableForm.lines.value;
    const cellsValue = +tableForm.cells.value;
    const contentValue = tableForm.content.value;
    console.log(linesValue, cellsValue, contentValue);
    for (let i = 0; i < linesValue; i++) {
const tr = document.createElement('tr');
    for (let j = 0; j < cellsValue; j++) {
const td = document.createElement('td');
    td.innerText = contentValue;
    tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}
// -----------------------------------------
const block = document.getElementById('block');
const currentTime = Date.now();
const updateTime = localStorage.getItem('updateTime');
let money = Number(localStorage.getItem('money')) || 100;
if (!updateTime || (currentTime - updateTime) > 10000) {
    money += 10;
    localStorage.setItem('money', money.toString());
    localStorage.setItem('updateTime', currentTime.toString());
}
block.innerText = `${money} UAH`;
// -----------------------------------------
    const array = Array.from({ length: 100 }, (_, index) => ({ id: index + 1 }));
    let startIndex = 0;
    let endIndex = 10;

    function displayItems() {
    const content = document.getElementById('arrayDiv');
    content.innerHTML = '';
    const itemsToShow = array.slice(startIndex, endIndex);
    itemsToShow.forEach(item => {
    const div = document.createElement('div');
    div.textContent = `${item.id}`;
    content.appendChild(div);
});
}
    document.getElementById('prev').addEventListener('click', () => {
    if (startIndex > 0) {
    startIndex -= 10;
    endIndex -= 10;
    displayItems();
}
});
    document.getElementById('next').addEventListener('click', () => {
    if (endIndex < array.length) {
    startIndex += 10;
    endIndex += 10;
    displayItems();
}
});
    displayItems();




