

function addTask(e) {
    var task = document.getElementById("task");
    var newTask = document.createElement("li");
    newTask.innerText = task.value;
    var tasks = document.getElementById("tasks");
    tasks.appendChild(newTask);
}

var btn = document.getElementById("btnAdd");
btn.addEventListener("mouseover", addTask, false);