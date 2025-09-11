const form = document.getElementById("todoForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
tasks.forEach(renderTask);

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = taskInput.value.trim();
    if (!task) return;
    
    const newTask = { text: task, completed: false };

    tasks.push(newTask);

    saveTasks();

    renderTask(newTask);
    taskInput.value = "";
});

function renderTask(taskObj) {
    const li = document.createElement("li");
    
    const span = document.createElement("span");
    span.textContent = taskObj.text;

    if (taskObj.completed) {
        span.classList.add("completed");
    }

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";

    span.addEventListener("click", () => {
        taskObj.completed = !taskObj.completed;
        span.classList.toggle("completed");
        saveTasks();
    });

    deleteBtn.addEventListener("click", () => {
        tasks = tasks.filter( t => t !== taskObj);
        li.remove();
        saveTasks();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}