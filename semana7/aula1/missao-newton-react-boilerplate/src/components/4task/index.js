import React from 'react';
import Title from './title/';
import TaskList from './taskList/'
import InputTask from './toDoTask/index.js';
import Buttons from './button/';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';


const StyledContainer = styled.div`
	display:flex;
	flex-direction:column
	width:100vw;
	justify-content:center;
	align-items:center;
`

class ForTask extends React.Component {
	render() {
		return (
			<StyledContainer>
				<Title />
				<InputTask />
				<Button variant="contained" color="primary">
					Add Task
      			</Button>
				<TaskList />
				<Buttons />
			</StyledContainer>
		);
	}
}

export default ForTask;