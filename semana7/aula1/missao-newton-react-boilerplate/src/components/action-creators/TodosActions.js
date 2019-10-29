function taskToDo(id,titleTask,descriptionTask) {
	return{
		type: "TASK_TO_DO",
		payload:{
			id: id,
			titleTask: titleTask,
			descriptionTask: descriptionTask,
			completed: false
		}
	}
}

function MarkAllCompletedTasks(){
	return{
		type: "MARK_ALL_COMPLETED_TASKS",
	}
}

function RemoveCompletedTaskList(id){
	return{
		type: "REMOVE_COMPLETED_TASK_LIST",
	}
}

function MarkTaskCompleted(id){
	return{
		type: "MARK_TASK_COMPLETED",
		payload:{
			id:id,
		}
	}
}

function RemoveTask(id){
	return{
		type: "REMOVE_TASK",
		payload:{
			id: id,
		}
	}
}