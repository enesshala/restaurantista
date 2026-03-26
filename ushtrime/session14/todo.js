const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addTask");
const tasksList = document.getElementById("tasksList");
const error = document.getElementById("error");

let tasks = [];

addButton.addEventListener("click", () => {
    error.textContent = "";
    const taskValue = taskInput.value;

    if (!taskValue) {
        error.textContent = "Task title is required!";
        return;
    }

    if (tasks.includes(taskValue)) {
        error.textContent = "Task already exist!";
        return;
    }

    if (taskValue) {
        const newTask = document.createElement("li");
        newTask.textContent = taskValue;
        tasksList.appendChild(newTask);
        tasks.push(taskValue);
        taskInput.value = "";
    } else {
        error.textContent = "An error occur!";
    }
});
