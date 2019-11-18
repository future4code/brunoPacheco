import axios from 'axios';

/*  1º passo - action assíncrona e importar a url GET da documentação.
    O console.log serve para vermos se os dados que vem do backend estão de acordo.

*/ 
export const fetchTrips = () => async dispatch => {
    const response = await axios.get(
        "https://us-central1-missao-newton.cloudfunctions.net/futureX/bruno/trips"
    )
    dispatch(setTrips(response.data.trips))
}

const setTrips = (trips) => {
    return {
        type:"SET_TRIPS",
        payload:{
            trips,
        }
    }
}