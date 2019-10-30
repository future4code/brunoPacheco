import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
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
					<StyledListItemText>Esse é o título</StyledListItemText>
					<ListItemText>Essa é a descrição</ListItemText>
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