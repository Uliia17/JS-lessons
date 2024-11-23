//----------------------------------------------За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let allCourseDiv = document.getElementsByClassName('coursesAndDurationArray')[0];
for (const course of coursesAndDurationArray) {
    let div = document.createElement('div');
    div.classList.add('item');
    allCourseDiv.appendChild(div);
    let h1 = document.createElement('h1');
    h1.innerText = course.title;
    h1.classList.add('heading');
    let p = document.createElement('p');
    p.innerText = course.monthDuration;
    p.classList.add('description');
    allCourseDiv.append(h1, p);
    document.body.appendChild(allCourseDiv);
}