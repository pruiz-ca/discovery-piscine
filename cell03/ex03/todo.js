var		array = [];

function	createDiv(value) {
	const section = document.getElementById("todo");
	const newTask = document.createElement("div");
	newTask.setAttribute("class", "todo");
	newTask.textContent = value;
	section.prepend(newTask);
	array.push(value);
}

function	addNewTask() {
	var taskContent = prompt("Add new task");
	if (taskContent && taskContent.trim())
		createDiv(taskContent);
}

function	deleteTask(e) {
	if (window.confirm("You are going to delete a task")) {
		window.addEventListener("click", e);
		var idx = array.indexOf(e.target.textContent);
		if (idx != -1)
			array.splice(idx, 1);
		e.target.remove();
	}
}

function	saveCookie() {
	localStorage.setItem("awesomeToDoList", JSON.stringify(array));
}

function	loadCookie() {
	var		cookieArray = JSON.parse(localStorage.getItem("awesomeToDoList"));

	if (cookieArray)
		for (var i = 0; i < cookieArray.length; i++)
			createDiv(cookieArray[i]);
}

window.onload = loadCookie;
window.onbeforeunload = saveCookie;