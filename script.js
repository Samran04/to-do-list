const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

document.addEventListener('DOMContentLoaded', loadTasks);

addTaskBtn.addEventListener('click',addTask);

function addTask(){
    const taskText = taskInput.value;//Get the value from input field
    if(taskText === ''){
        alert('please enter a task!')
        return;
    }//alert if the input is empty
    const li = document.createElement('li');
    li.textContent = taskText;
    
    const buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('buttons');

    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'completed';

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
    buttonsDiv.appendChild(completeBtn);
    buttonsDiv.appendChild(deleteBtn);
    li.appendChild(buttonsDiv);
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

function loadTasks(){
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []; 
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task.text; 
        if (task.completed) {
            li.classList.add('completed'); 
        }

                const completeBtn = document.createElement('button');
                completeBtn.textContent = '✔️'; 
                completeBtn.addEventListener('click', () => {
                    li.classList.toggle('completed'); 
                    saveTasks(); 
                });
        
                
                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Delete'; 
                deleteBtn.className = 'delete-btn'; 
                deleteBtn.addEventListener('click', () => {
                    taskList.removeChild(li); 
                    saveTasks(); 
                });
        
                
                li.appendChild(completeBtn);
                li.appendChild(deleteBtn);
                taskList.appendChild(li); 
            });
        }
        



