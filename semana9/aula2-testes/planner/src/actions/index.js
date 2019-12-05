export const addPlanner = (text, dayOfTheWeek) => {
    return {
        type: "ADD_PLANNER",
        payload: []
    }
}

export const updatePlannerText = (newText) => {
    return {
        type:"UPDATE_PLANNER_TEXT",
        payload: {
            newText,
        }
    }
}

export const updatePlannerDay = (newDay) => {
    return {
        type:"UPDATE_PLANNER_Day",
        payload: {
            newDay,
        }
    }
}

