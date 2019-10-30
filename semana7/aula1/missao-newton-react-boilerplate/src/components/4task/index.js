import React from 'react';
import Title from './title/';
import TaskList from './taskList/'
import InputTask from './toDoTask/index.js';
import Buttons from './button/';
import styled from 'styled-components';

const StyledContainer = styled.div`
	display:flex;
	flex-direction:column
	width:100vw;
	justify-content:center;
	align-items:center;
`

const tasks = [
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
		completed: false
	}
]

class ForTask extends React.Component {
	render() {
		return (
			<StyledContainer>
				<Title />
				<InputTask />
				<TaskList taskList={tasks} />
				<Buttons />
			</StyledContainer>
		);
	}
}

export default ForTask;