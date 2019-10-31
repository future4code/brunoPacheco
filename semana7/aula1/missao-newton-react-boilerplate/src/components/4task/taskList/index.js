import React from 'react';
import Task from './task/';
import { connect } from 'react-redux';

//isso era utilizado antes do redux
class TaskList extends React.Component {
	render(){
		return this.props.tasks.map(task => <Task task={task}/>)
	}
}

//essa é a implementação do redux 
function mapStateToProps(state) {
	return{
		tasks: state.tasks
	}
}

export default connect(mapStateToProps)(TaskList);