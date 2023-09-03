document.querySelector('#input-task').addEventListener("keypress", event => {
    if (event.key === "Enter") {
        addTask();
    }
});



function addTask() {
    const taskInput = document.getElementById('input-task');
    const taskList = document.getElementById('list-task');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const listElement = document.createElement('li');
        const paragraph = document.createElement('p');
        const doneButton = document.createElement('button');
        const removeButton = document.createElement('button');
        const paragraphSpan = document.createElement('span');
        const buttonsSpan = document.createElement('span');

        removeButton.type = 'button';
        removeButton.className = 'remove-btn';
        removeButton.id = 'remove-btn_' + Date.now();
        doneButton.type = 'button';
        doneButton.className = 'done-btn';

        paragraph.className = 'list-p-tasks';
        paragraph.textContent = taskText;
        paragraph.style.textDecoration = 'none';

        paragraphSpan.className = 'list-p-span';
        buttonsSpan.className = ' ';

        taskList.appendChild(listElement);
        listElement.appendChild(paragraphSpan);
        paragraphSpan.appendChild(paragraph);
        listElement.appendChild(buttonsSpan);
        buttonsSpan.appendChild(doneButton);
        buttonsSpan.appendChild(removeButton);


        taskInput.value = '';

        // Збереження списку в localStorage
        saveTaskListToLocalStorage(taskList.innerHTML);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.getElementById('list-task');
    taskList.addEventListener('click', event => {
        const clickedElement = event.target;

        if (clickedElement.classList.contains('done-btn')) {
            updateTaskStyle(clickedElement);
            saveTaskListToLocalStorage(taskList.innerHTML);
        }

        if (clickedElement.classList.contains('remove-btn')) {
            const btnParent = clickedElement.parentElement;
            const listItem = btnParent.parentElement;
            taskList.removeChild(listItem);
            saveTaskListToLocalStorage(taskList.innerHTML);
        }
    });
});

function updateTaskStyle(clickedElement) {
    const btnParent = clickedElement.parentElement;
    const listItem = btnParent.parentElement;
    const paragraphParent = listItem.firstChild;
    const p = paragraphParent.firstChild;
    if (p.classList.contains('done-task')){
        paragraphParent.classList.remove('done-task-background');
        p.classList.remove('done-task');
    } else {
        paragraphParent.classList.add('done-task-background');
        p.classList.add('done-task');
    }
}

function clearTasks() {
    const taskList = document.getElementById('list-task');
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    localStorage.removeItem('taskList');
}



function saveTaskListToLocalStorage(taskListHTML) {
    localStorage.setItem('taskList', taskListHTML);
}

function retrieveTaskListFromLocalStorage() {
    const taskList = document.getElementById('list-task');
    const taskListHTML = localStorage.getItem('taskList');
    if (taskListHTML) {
        taskList.innerHTML = taskListHTML;

        // Перевірка стилів для оновлення
        const labels = taskList.getElementsByClassName('list-label-tasks');
        for (let i = 0; i < labels.length; i++) {
            const label = labels[i];
            if (label.getAttribute('area-selected') === 'true') {
                label.style.textDecoration = 'line-through';
            }
        }
    }
}

// Виклик функції для отримання списку з localStorage під час завантаження сторінки
    retrieveTaskListFromLocalStorage();