import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import styled from 'styled-components';
import DeleteIcon from '@material-ui/icons/Delete';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';

const StyledListItemText = styled(ListItemText)`
	font-weight: bold;
`

class Task extends React.Component {

	render() {
		return (
			<List>
				<ListItem dense button>
					<IconButton edge="end" aria-label="comments">
						<AssignmentTurnedInIcon />
					</IconButton>
					<StyledListItemText>{this.props.task.title}</StyledListItemText>
					<ListItemText>{this.props.task.description}</ListItemText>
					<ListItemSecondaryAction>
						<IconButton edge="end" aria-label="comments">
							<DeleteIcon />
						</IconButton>
					</ListItemSecondaryAction>
				</ListItem>
			</List>
		)
	}
}

export default Task;