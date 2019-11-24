import React from 'react';
import { connect } from "react-redux";
import styled from 'styled-components';
import daysOfTheWeek from '../Days';
import { addPlanner } from '../../../actions'


const StyledContainer = styled.div`
    display:flex;
    flex-direction:column;
`

class PlannerInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            planner: [
                {
                    text: "",
                    dayOfTheWeek: ""
                }
            ]
        }
    }

    onChangePlanner = event => {
        this.setState({ text: event.target.value, dayOfTheWeek: event.target.value });
    };

    clearForm = () => {
        this.setState({
            text: "",
            dayOfTheWeek: ""
        })
    }

    handleInputChange = event => {
        //ao invés de fazer dois setState, pode-se fazer tudo em uma linha só
        this.setState({ dayOfTheWeek: event.target.value })
    }

    handleOnSubmitForm = event => {
        event.preventDefault();
        //mandar para a API
        this.props.addPlanner({ text: this.state.text, dayOfTheWeek: this.state.dayOfTheWeek });
        this.clearForm();
    };

    render() {
        return (
            <StyledContainer>
                <h1>Planejamento Semanal</h1>
                <form onSubmit={this.handleOnSubmitForm} >
                    <input
                        //onChange para realizar a mudança do input
                        onChange={this.onChangePlanner}
                        //valor onde o que foi digitado irá ficar
                        value={this.state.planner.text}
                        type="text"
                        name="text"
                        placeholder="Tarefa"
                    />
                    <select
                        name="daysOfTheWeek"
                        id="daysOfTheWeek"
                        value={this.state.planner.dayOfTheWeek}
                        onChange={this.handleInputChange}
                        required
                    >
                        {daysOfTheWeek}
                    </select>
                    <button type="submit">Criar</button>
                </form>
            </StyledContainer>
        )
    }

}

function mapDispatchToProps(dispatch) {
    return {
        addPlanner: (text, dayOfTheWeek) => dispatch(addPlanner(text, dayOfTheWeek))
    }
}

export default connect(null, mapDispatchToProps)(PlannerInput);