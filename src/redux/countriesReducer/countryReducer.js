import Types from './countryTypes';

const getCountriesReducer = (
	state = { countries: [], loading: true },
	action
) => {
	switch (action.type) {
		case Types.GET_COUNTRIES_REQUEST:
			return { ...state, loading: true };
		case Types.GET_COUNTRIES_DETAILS:
			return { ...state, loading: false, countries: action.payload };
		case Types.GET_COUNTRIES_FAIL:
			return { ...state, loading: false, error: action.payload };
		default:
			return state;
	}
};

const getCountryReducer = (state = { country: {}, loading: true }, action) => {
	switch (action.type) {
		case Types.GET_COUNTRY_REQUEST:
			return { ...state, loading: true };
		case Types.GET_COUNTRY_DETAILS:
			return { ...state, loading: false, country: action.payload };
		case Types.GET_COUNTRY_FAIL:
			return { ...state, loading: false, error: action.payload };
		default:
			return state;
	}
};

export { getCountriesReducer, getCountryReducer };
