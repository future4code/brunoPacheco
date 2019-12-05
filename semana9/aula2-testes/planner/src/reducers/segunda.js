import daysOfTheWeek from "../containers/Components/Days"

const initialState = {
    planners:[],
    currentPlannerText:"",
    currentPlannerDay:""
}

export const segundaReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case 'ADD_POST':
            const newPlanners = [{
                text: state.currentPlannerText,
                dayOfTheWeek: state.currentPlannerDay,
                //lógica de negócio no reducer
                id: Date.now()
            },...state.planner]
            return [{planners: newPlanners}, ...state]
        case 'UPDATE_PLANNER_TEXT':
            return { ...state, currentPlannerText: action.payload.newText }
            default:
            return state
    }
}