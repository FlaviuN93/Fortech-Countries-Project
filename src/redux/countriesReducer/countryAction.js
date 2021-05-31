import Types from './countryTypes';
import axios from 'axios';
import { filterCountries } from './countryUtils';

export const getAllCountries =
	(keyword = '', category = 'all') =>
	async (dispatch) => {
		try {
			dispatch({ type: Types.GET_COUNTRIES_REQUEST });
			const { data } = await axios.get(
				`https://restcountries.eu/rest/v2/${category}/${keyword}`
			);

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

export const getFilteredCountries =
	(category = '', keyword = '') =>
	async (dispatch, getState) => {
		try {
			dispatch({ type: Types.FILTER_REQUEST });
			const { countries } = await getState().countriesInfo;
			const data = filterCountries(countries, category, keyword);
			dispatch({ payload: data, type: Types.FILTER_SUCCESS });
		} catch (err) {
			dispatch({ payload: err, type: Types.FILTER_FAIL });
		}
	};
