document.getElementById('hide').onclick = function() {
    let element = document.getElementById('text');
    element.remove();
};
// -----------------------------------------
let ageInput = document.getElementById('age');
let check = document.getElementById('check');
let message = document.getElementById('message');
check.onclick = function() {
    let age = ageInput.value;
    if (age < 18) {
        message.innerText = 'You are under 18 years old';
    } else {
        message.innerText = 'Age confirmed';
    }
};
// -----------------------------------------
let userForm = document.getElementById('user');
    userForm.onsubmit = function(event) {
    event.preventDefault();
    let user = {
    name: this.name.value,
    surname: this.surname.value,
    age: this.userAge.value
};
let userMessage = document.getElementById('userMessage');
    userMessage.innerText = `${JSON.stringify(user)}`;
};
// -----------------------------------------
let num = +localStorage.getItem('number');
num += 1;
localStorage.setItem('number', num);
document.getElementById('block').innerText = num;
// -----------------------------------------
let currentDate = new Date();
let sessionInfo = {
    date: currentDate.toLocaleDateString(),
    time: currentDate.toLocaleTimeString()
};
let sessionsList = JSON.parse(localStorage.getItem('sessionsList')) || [];
    sessionsList.push(sessionInfo);
    localStorage.setItem('sessionsList', JSON.stringify(sessionsList));
