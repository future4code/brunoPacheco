import React from 'react';
import ButtonAll from './buttonAll/';
import ButtonComplete from './buttonComplete/';
import ButtonPending from './buttonPending/';
import styled from 'styled-components';

const StyledContainer = styled.div`
	display:flex;
	margin: 5px;
`

class Buttons extends React.Component{
	render(){
		return(
		<StyledContainer>
			<ButtonAll/>
			<ButtonComplete/>
			<ButtonPending/>
		</StyledContainer>
	)}
}

export default Buttons;