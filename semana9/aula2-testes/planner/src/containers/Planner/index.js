import React from "react";
import { connect } from "react-redux";
import PlannerInput from '../Components/PlannerInput';
import DayOfTheWeekCard from '../Components/DayOfTheWeekCard/'
import styled from 'styled-components';
import { addPlanner } from '../../actions'


const StyledContainer = styled.div`
  display:flex;
  flex-direction: column;
  margin: 0 auto;
`

class Planner extends React.Component {
  render() {
    return (
      <StyledContainer>
        <PlannerInput  />
        <DayOfTheWeekCard />
      </StyledContainer>
    )
  }
}



function mapDispatchToProps(dispatch) {
  return {
    createPlanner: (text, dayOfTheWeek) => dispatch(addPlanner(text, dayOfTheWeek))
  }
}

export default connect(null, mapDispatchToProps)(Planner);
