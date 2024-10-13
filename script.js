const addButton = document.getElementById("add-task-btn");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

document.addEventListener("DOMContentLoaded", function () {
  addButton.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
    addTask();
    loadTasks();
  });

  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks.forEach((taskText) => addTask(taskText, false));
  }

  function addTask(taskText, save = true) {
    if (save) {
      const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      storedTasks.push(taskText);
      localStorage.setItem("tasks", JSON.stringify(storedTasks));
    }
  }
});

function addTask() {
  const taskText = taskInput.ariaValueMax.trim();
  if (taskText === "") {
    alert("enter a task");
  } else {
    const newElement = document.createElement("li");
    taskText.appendChild(newElement);
    const btn = document.createElement("button");
    btn.textContent = "Remove";
    btn.classList.add("remove-btn");
    // btn.setAttribute("className","remove-btn");
    btn.onclick = taskList.removeChild(newElement);
    newElement.appendChild(btn);
    taskList.appendChild(newElement);
    taskInput.value = "";
  }
}
