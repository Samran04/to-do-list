const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

document.addEventListener('DOMContentLoaded', loadTasks);

addTaskBtn.addEventListener('click',addTask);

function addTask(){
    const taskTest = taskInput.value;//Get the value from input field
    if(taskTest === ''){
        alert('please enter a task!')
        return;
    }//alert if the input is empty
    const li = document.createElement('li');
    li.textContent = taskText;
    
    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'checkmark';

    completeBtn.addEventListener('click',() => {
        li.classList.toggle('completed');

        saveTasks();
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn'

    deleteBtn.addEventListener('click',() => {
        taskList.removeChild(li);
        saveTasks();
    });
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = '';
    saveTasks();
}

function saveTasks() {
    const tasks =[];

    document.querySelectorAll('li').forEach(li => {
        tasks.push({
            text: li.childNodes[0].textContent,completed:li.classList.contains('completed')
        });
    });
    localStorage.setItem('tasks',JSON.stringify(tasks));
}


