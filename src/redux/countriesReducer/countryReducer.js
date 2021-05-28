import { createReducer } from 'reduxsauce';
import { setError, setPayload, setPending } from '../../utils/actionHandlers';
import Types from './countryTypes';

export const INITIAL_STATE = {
	countries: {},
};

export const actionHandlers = {
	[Types.GET_COUNTRIES_REQUEST]: setPending,
	[Types.GET_COUNTRIES_DETAILS]: setPayload('countries'),
	[Types.GET_COUNTRIES_FAIL]: setError,
};

const countryReducer = createReducer(INITIAL_STATE, actionHandlers);
export default countryReducer;
