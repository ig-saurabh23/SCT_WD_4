const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");
const clearButton = document.getElementById("clear-btn");

// Add a new task to the list
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const taskItem = document.createElement("li");

  // Task content
  const taskContent = document.createElement("span");
  taskContent.textContent = taskText;
  taskItem.appendChild(taskContent);

  // Mark as completed
  taskItem.addEventListener("click", function () {
    taskItem.classList.toggle("completed");
  });

  // Remove task
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Delete";
  removeBtn.classList.add("remove-btn");
  removeBtn.addEventListener("click", function (e) {
    e.stopPropagation(); // Prevent click event on task
    taskItem.remove();
  });

  taskItem.appendChild(removeBtn);
  taskList.appendChild(taskItem);

  // Clear input field after adding task
  taskInput.value = "";
}

// Clear all tasks
function clearAllTasks() {
  taskList.innerHTML = "";
}

// Event Listeners
addButton.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});
clearButton.addEventListener("click", clearAllTasks);
