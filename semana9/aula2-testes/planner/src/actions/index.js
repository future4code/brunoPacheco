export const addPlanner = (text, dayOfTheWeek) => {
    return {
        type: "ADD_PLANNER",
        payload:{
            text,
            dayOfTheWeek
        }
    }
}