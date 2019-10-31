const initialState = [
	{
		id:1,
		title: "Minha primeira tarefa",
		description: "Essa tarefa tem como objetivo ser mostrada na lista de tarefas",
		completed: false
	},
	{
		id:2,
		title: "Minha segunda tarefa",
		description: "Essa tarefa tem como objetivo ser mostrada na lista de tarefas",
		completed: true
	}
];

export const tasksReducer = (state = initialState, action) => {
	console.log(action)
	return state
};