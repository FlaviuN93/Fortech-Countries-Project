import Types from './countryTypes';
import axios from 'axios';

export const getAllCountries = () => async (dispatch) => {
	try {
		dispatch({ type: Types.GET_COUNTRIES_REQUEST });
		const data = await axios.get('https://restcountries.eu/rest/v2/all');
		dispatch({ type: Types.GET_COUNTRIES_DETAILS, payload: data });
	} catch (err) {
		dispatch({ type: Types.GET_COUNTRIES_FAIL, payload: err.message });
	}
};
