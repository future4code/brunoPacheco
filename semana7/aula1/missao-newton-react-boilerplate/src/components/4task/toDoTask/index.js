import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { addTask } from '../../action-creators/tasks';
import { connect } from 'react-redux';

const StyledContainer = styled.div`
	display:flex;
	flex-direction:column;
`

class InputTask extends React.Component {
	constructor(props){
		super(props)

		this.state = {
			title:"",
			description:"",
		}
	}

	onChangeTitle = (event) => {
		this.setState({title: event.target.value});
	};

	onChangeDescription = (event) => {
		this.setState({description: event.target.value});
	}

	onClickAddTask = () => {
		this.props.addTask(this.state.title,this.state.description)
	}

	render() {
		return (
			<StyledContainer>
				<TextField
					id="outlined-basic"
					label="What's your title task?"
					margin="normal"
					variant="outlined"
					value={this.state.titleValue}
					onChange={this.onChangeTitle}
				/>
				<TextField
					id="outlined-multiline-static"
					label="Describe your Task:"
					multiline
					rows="2"
					margin="normal"
					variant="outlined"
					value={this.state.descriptionValue}
					onChange={this.onChangeDescription}
				/>
				<Button onClick={this.onClickAddTask}variant="contained" color="primary">
					Add Task
      			</Button>
			</StyledContainer>
		)
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		addTask: (title,description)=> dispatch(addTask(title,description))
	}
}

export default connect(null,mapDispatchToProps)(InputTask);