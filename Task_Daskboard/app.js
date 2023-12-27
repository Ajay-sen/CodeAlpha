let tasks = [];

function addTask() {
    const taskInput = document.getElementById('task');
    const deadlineInput = document.getElementById('deadline');

    const task = taskInput.value;
    const deadline = deadlineInput.value;

    if (task && deadline) {
        tasks.push({ task, deadline });
        displayTasks();
        // Additional logic for sending notifications
        // ...
    }

    taskInput.value = '';
    deadlineInput.value = '';
}

function displayTasks() {
    const taskListDiv = document.getElementById('taskList');
    taskListDiv.innerHTML = '';

    tasks.forEach((taskObj, index) => {
        const taskItem = document.createElement('div');
        taskItem.innerHTML = `<strong>${taskObj.task}</strong> - Deadline: ${taskObj.deadline}`;
        taskListDiv.appendChild(taskItem);
    });
}
