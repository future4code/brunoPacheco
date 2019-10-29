import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const StyledContainer = styled.div`
	display:flex;
	flex-direction:column;
`

class InputTask extends React.Component {
	render() {
		return (
			<StyledContainer>
				<TextField
					id="outlined-basic"
					label="What's your title task?"
					margin="normal"
					variant="outlined"
				/>
				<TextField
					id="outlined-multiline-static"
					label="Describe your Task:"
					multiline
					rows="2"
					margin="normal"
					variant="outlined"
				/>
			</StyledContainer>
		)
	}
}

export default InputTask;