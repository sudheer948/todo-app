const form = document.getElementById("todoForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = taskInput.value.trim();
    if (!task) {
        console.log("no task is there");
        return;
    };

    const li = document.createElement("li");
    li.textContent = task;

    taskList.appendChild(li);
    taskInput.value = "";
});