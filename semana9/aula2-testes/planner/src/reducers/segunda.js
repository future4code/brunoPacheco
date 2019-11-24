import daysOfTheWeek from "../containers/Components/Days"

const initialState = {
    planner:[]
}

export const segundaReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case 'ADD_POST':
            const newPlanner = [...state.planner,{
                text: action.payload.text,
                dayOfTheWeek: action.payload.dayOfTheWeek,
                //lógica de negócio no reducer
                id: Date.now()
            }]
            return [newPlanner, ...state]
        default:
            return state
    }
}