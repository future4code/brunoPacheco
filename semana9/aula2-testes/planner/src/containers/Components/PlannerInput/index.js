import React from 'react';
import { connect } from "react-redux";
import styled from 'styled-components';
import daysOfTheWeek from '../Days';
import { updatePlannerText, updatePlannerDay, addPlanner } from '../../../actions'


const StyledContainer = styled.div`
    display:flex;
    flex-direction:column;
`

export const PlannerInput = props => {

    const onChangePlannerText = event => {
        props.updatePlannerText({ text: event.target.value});
    };

    const onChangePlannerDay = event => {
        props.updatePlannerDay({ day: event.target.value});
    };

    const handleOnSubmitForm = event => {
        event.preventDefault();
        props.addPlanner();
    };


    const handleInputChange = event => {
        //ao invés de fazer dois setState, pode-se fazer tudo em uma linha só
        this.setState({ dayOfTheWeek: event.target.value })
    }

    
    return (
        <StyledContainer>
            <h1>Planejamento Semanal</h1>
            <form onSubmit={handleOnSubmitForm}  >
                <input
                    //onChange para realizar a mudança do input
                    onChange={onChangePlannerText}
                    //valor onde o que foi digitado irá ficar
                    value={props.currentPlannerText}
                    type="text"
                    name="text"
                    placeholder="Tarefa"
                />
                <select
                    name="daysOfTheWeek"
                    id="daysOfTheWeek"
                    value={props.currentPlannerDay}
                    onChange={onChangePlannerDay}
                    required
                >
                    {daysOfTheWeek}
                </select>
                <button type="submit">Criar</button>
            </form>
        </StyledContainer>
    )

}
function mapStateToProps(state) {
    return {
        currentPlannerText: state.currentPlannerText,
        currentPlannerDay: state.currentPlannerDay
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addPlanner: () => dispatch(addPlanner()),
        updatePlannerText: (newText) => dispatch(updatePlannerText(newText)),
        updatePlannerDay: (newDay) => dispatch(updatePlannerDay(newDay)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlannerInput);