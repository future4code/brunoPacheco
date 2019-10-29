import React from 'react';
import Title from './title/';
import TaskList from './taskList/'
import InputTask from './toDoTask/index.js';
import styled from 'styled-components';

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
				<TaskList />
			</StyledContainer>
		);
	}
}

export default ForTask;