import React from "react";
import { connect } from "react-redux";
import PlannerInput from '../Components/PlannerInput';
import DayOfTheWeekCard from '../Components/DayOfTheWeekCard/'
import styled from 'styled-components';


const StyledContainer = styled.div`
    display:flex;
    flex-direction:column;
`

class Planner extends React.Component {
  render() {
    return (
      <StyledContainer>
        <PlannerInput />
        <DayOfTheWeekCard />
      </StyledContainer>
    )
  }
}

export default connect()(Planner);
