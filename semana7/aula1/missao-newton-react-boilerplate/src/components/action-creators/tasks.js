export const addTask = (title,description) => {
	return{
		type: "ADD_TASK",
		payload:{
			title: title,
			description: description,
		}
	}
}