function taskToDo(task) {
	return{
		type: "TASK_TO_DO",
	}
}

function taskList(list) {
	return{
		type: "TASK_LIST",
	}
}

function taskListDelete(delete) {
	return{
		type: "TASK_LIST_DELETE",
	}
}

function taskListComplete(complete) {
	return{
		type: "TASK_LIST_COMPLETE",
	}
}

function taskListPending(pending) {
	return{
		type: "TASK_LIST_PENDING",
	}
}

function taskListMarkComplete(markComplete) {
	return{
		type: "TASK_LIST_MARK_COMPLETE",
	}
}

function taskListRemoveComplete(removeComplete) {
	return{
		type: "TASK_LIST_REMOVE_COMPLETE",
	}
}

function allTaskList(all) {
	return{
		type: "ALL_TASK_LIST",
	}
}