import Types from './countryTypes';

const getCountriesReducer = (
	state = { countries: [], loading: true, addFilterInfo: [] },
	action
) => {
	switch (action.type) {
		case Types.GET_COUNTRIES_REQUEST:
			return { loading: true, error: undefined };
		case Types.GET_COUNTRIES_DETAILS:
			return { loading: false, countries: action.payload };
		case Types.GET_COUNTRIES_FAIL:
			return { loading: false, error: action.payload };
		case Types.ADD_FILTER_INFO:
			return { ...state, addFilterInfo: action.payload };
		default:
			return state;
	}
};

const getCountryReducer = (state = { country: {}, loading: true }, action) => {
	switch (action.type) {
		case Types.GET_COUNTRY_REQUEST:
			return { loading: true, error: undefined };
		case Types.GET_COUNTRY_DETAILS:
			return { loading: false, country: action.payload };
		case Types.GET_COUNTRY_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

const filterCountryReducer = (
	state = { countries: [], loading: true },
	action
) => {
	switch (action.type) {
		case Types.FILTER_REQUEST:
			return { loading: true };
		case Types.FILTER_SUCCESS:
			return { loading: false, countries: action.payload };
		case Types.FILTER_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export { getCountriesReducer, getCountryReducer, filterCountryReducer };
