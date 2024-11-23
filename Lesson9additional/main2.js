    let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
    ];

    for (const course of coursesArray) {
    let div = document.createElement('div');
        div.classList.add('main');
    let titleDiv = document.createElement('div');
    titleDiv.innerText = `title: ${course.title}`;
        titleDiv.classList.add('title');
    let headerDiv = document.createElement('div');
        headerDiv.classList.add('header');
    let monthDurationDiv = document.createElement('div');
    monthDurationDiv.innerText = `monthDuration: ${course.monthDuration}`;
        monthDurationDiv.classList.add('left');
    let hourDurationDiv = document.createElement('div');
    hourDurationDiv.innerText = `hourDuration: ${course.hourDuration}`;
        hourDurationDiv.classList.add('right');
        headerDiv.append(monthDurationDiv, hourDurationDiv);
        let modulesDiv = document.createElement('div');
        modulesDiv.innerText = `modules:`;
        modulesDiv.classList.add('modules');
        for (const module of course.modules) {
            let moduleDiv = document.createElement('div');
            moduleDiv.classList.add('module-item');
            moduleDiv.innerText = module;
            modulesDiv.appendChild(moduleDiv);
        }
    div.append(titleDiv, headerDiv, modulesDiv);
    document.body.appendChild(div);
}
//------------------------------------------------------------------
        const blocks = document.querySelectorAll('.block');
        let maxHeight = 0;
    for (const block of blocks) {
        const blockHeight = block.offsetHeight;
            if (blockHeight > maxHeight) {
            maxHeight = blockHeight;
    }
        for (const element of blockHeight) {
            block.style.height = `${maxHeight}`;
        }}


