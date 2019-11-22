import React from 'react';
import { connect } from "react-redux";
import styled from 'styled-components';
import daysOfTheWeek from '../Days';


const StyledContainer = styled.div`
    display:flex;
    flex-direction:column;
`

class PlannerInput extends React.Components {
    constructor(props) {
        super(props)
        this.state = {
            planner: [
                {
                    text: "",
                    dayOfTheWeek: ""
                }
            ]
        }
    }

    onChangePlanner = value => {
        this.setState({ text: value });
        this.setState({ dayOfTheWeek: value });
    };

    clearForm = () => {
        this.setState({
            text: "",
            dayOfTheWeek: ""
        })
    }

    handleInputChange = event => {
        this.setState({ dayOfTheWeek: event.target.value })
    }

    handleOnSubmitForm = event => {
        event.preventDefault();
        console.log(this.state.text)
    };

    render() {
        return (
            <StyledContainer>
                <h1>Planejamento Semanal</h1>
                <form onSubmit={this.handleOnSubmitForm} >
                    <input
                        onChange={this.onChangeValue}
                        value={this.state.text}
                        type="text"
                        name="text"
                        placeholder="Tarefa"
                    />
                    <select
                        name="daysOfTheWeek"
                        id="daysOfTheWeek"
                        value={this.state.dayOfTheWeek["day"]}
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

export default connect()(PlannerInput);