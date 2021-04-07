var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#task-to-do");

var createTaskHandler = function () {
    event.preventDefault();

    var taskNameInput = document.querySelector("input[name='task-name']").value;

    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    var listItemEl = document.createElement("li");

    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
    taskInfoEl.innerHTML =
        "<h3 class='task-name'>" +
        taskNameInput +
        "</h3><span class='task-type'>" +
        taskTypeInput +
        "</span>";

    listItemEl.className = "task-item";
    listItemEl.appendChild(taskInfoEl);
    tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", createTaskHandler);
