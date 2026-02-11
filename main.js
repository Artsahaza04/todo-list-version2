function addTask() {
    const taskInput = document.getElementById('taskInput');
    const todoList = document.getElementById('todoList');

    if (taskInput.value.trim() === '') {
        alert('Veuillez entrer une tâche.');
        return;
    }

    const li = document.createElement('li');
    li.classList.add('task');
    li.textContent = taskInput.value;

    const treatButton = document.createElement('button');
    treatButton.textContent = 'Traiter';
    treatButton.addEventListener('click', function () {
        moveTask(li, 'inProgressList', 'Terminé');
    });
    
    li.appendChild(treatButton);
    todoList.appendChild(li);
    taskInput.value = '';
}

function moveTask(task, targetListId, nextButtonLabel) {
    const targetList = document.getElementById(targetListId);
    task.querySelector('button').remove();
    
    if (targetListId === 'inProgressList') {
        const completeButton = document.createElement('button');
        completeButton.textContent = nextButtonLabel;
        completeButton.addEventListener('click', function () {
            moveTask(task, 'doneList', '');
        });
        task.appendChild(completeButton);
    }
    
    targetList.appendChild(task);
}