import axios from 'axios'

export const clearSwipes = () => async (dispatch) => {
	await axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/bruno/clear')
}

export const getProfile = () => async (dispatch) => {
	const miau = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/bruno/person')
	console.log(miau.data.profile)
	dispatch(setUser(miau.data.profile))
}

export const setUser = (profile) => ({
	type:"SET_USER",
	payload:{
		profile,
	}
});

export const chooseProfile = () => async (dispatch) => {
	const response = await axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person')
	console.log(response)
}

