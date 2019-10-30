const initialState = [
	{
		id:1,
		titleTask: "Minha primeira tarefa",
		descriptionTask: "Essa tarefa tem como objetivo ser mostrada na lista de tarefas",
		completed: false
	},
	{
		id:2,
		titleTask: "Minha segunda tarefa",
		descriptionTask: "Essa tarefa tem como objetivo ser mostrada na lista de tarefas",
		completed: true
	}
]

export const tasksReducer = (state = initialState, action) => {
	return state
}