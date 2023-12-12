function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");

  if (taskInput.value === '') {
    alert("Please enter a task!");
    return;
  }

  var li = document.createElement("li");
  li.appendChild(document.createTextNode(taskInput.value));
  taskList.appendChild(li);
  taskInput.value = '';

  li.onclick = function() {
    this.classList.toggle('completed');
  };
}

document.getElementById("taskInput").addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    addTask();
  }
});
  
