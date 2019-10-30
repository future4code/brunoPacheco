import React from 'react';
import Task from './task/';

class TaskList extends React.Component {
	render(){
		return this.props.tasks.map(task => <Task task={task}/>)
	}
}

export default TaskList;