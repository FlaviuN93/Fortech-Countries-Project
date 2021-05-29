import Types from './countryTypes';
import axios from 'axios';

export const getAllCountries = () => async (dispatch) => {
	try {
		dispatch({ type: Types.GET_COUNTRIES_REQUEST });
		const { data } = await axios.get('https://restcountries.eu/rest/v2/all');
		dispatch({ payload: data, type: Types.GET_COUNTRIES_DETAILS });
	} catch (err) {
		dispatch({ payload: err, type: Types.GET_COUNTRIES_FAIL });
	}
};

export const getCountryById = (countryId) => async (dispatch) => {
	try {
		dispatch({ type: Types.GET_COUNTRY_REQUEST });
		const { data } = await axios.get(
			`https://restcountries.eu/rest/v2/alpha/${countryId}`
		);
		dispatch({ payload: data, type: Types.GET_COUNTRY_DETAILS });
	} catch (err) {
		dispatch({ payload: err, type: Types.GET_COUNTRY_FAIL });
	}
};
