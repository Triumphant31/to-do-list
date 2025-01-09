document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== "") {
        const li = document.createElement('li');
        li.textContent = taskInput.value;

        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Complete';
        completeBtn.style.marginLeft = '10px';
        completeBtn.addEventListener('click', function() {
            li.style.textDecoration = li.style.textDecoration === 'line-through' ? 'none' : 'line-through';
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.style.marginLeft = '10px';
        deleteBtn.addEventListener('click', function() {
            taskList.removeChild(li);
        });

        li.appendChild(completeBtn);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
});
const modeSwitchBtn = document.getElementById('modeSwitchBtn');

modeSwitchBtn.addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
        modeSwitchBtn.textContent = 'Switch to Dark Mode';
    } else {
        modeSwitchBtn.textContent = 'Switch to Light Mode';
    }
});
