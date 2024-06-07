
function createTaskElement(taskName) {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const label = document.createElement("label");
    label.textContent = taskName;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Excluir";
    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(deleteButton);
    return li;
}


function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskName = taskInput.value.trim();

    if (taskName !== "") {
        const taskList = document.getElementById("taskList");
        const newTaskElement = createTaskElement(taskName);
        taskList.appendChild(newTaskElement);
        taskInput.value = "";
        updateTaskCount();
    }
}


function removeTask(taskElement) {
    taskElement.remove();
    updateTaskCount();
}


function updateTaskCount() {
    const totalTasks = document.getElementById("totalTasks");
    const completedTasks = document.getElementById("completedTasks");

    totalTasks.textContent = document.querySelectorAll("#taskList li").length;
    completedTasks.textContent = document.querySelectorAll("#taskList li input[type='checkbox']:checked").length;
}


document.getElementById("addTaskButton").addEventListener("click", addTask);


document.addEventListener("change", function(event) {
    if (event.target && event.target.type === "checkbox") {
        event.target.parentElement.classList.toggle("completed");
        updateTaskCount();
    }
});


document.addEventListener("click", function(event) {
    if (event.target && event.target.tagName === "BUTTON" && event.target.textContent === "Excluir") {
        removeTask(event.target.parentElement);
    }
});

updateTaskCount();