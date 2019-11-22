import React from 'react';
import { connect } from "react-redux";
import styled from 'styled-components';

const StyledContainer = styled.div`
    display:flex;
    flex-direction:column;
`

function PlannerInput() {
    return (
        <StyledContainer>
            <h1>Planejamento Semanal</h1>
            <div>
                <label>Tarefa:</label>
                <input type="text" />
                <button>Criar</button>
            </div>
        </StyledContainer>
    )
}

export default connect()(PlannerInput);