import React from 'react';
import { connect } from "react-redux";
import styled from 'styled-components';

const StyledContainer = styled.div`
    display:flex;
    flex-direction:column;
`

function DayOfTheWeekCard() {
    return (
        <StyledContainer>
            <h1>Day of the week card</h1>

        </StyledContainer >
    )
}

export default connect()(DayOfTheWeekCard);