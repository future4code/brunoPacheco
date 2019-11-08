const initialState = {
    trips:[]
};

const trips = (state = initialState, action) => {
    switch (action.type){
        case "SET_TRIPS":
            return {
                ...state, trips:action.payload.trips
            }
    }
}

export default trips;