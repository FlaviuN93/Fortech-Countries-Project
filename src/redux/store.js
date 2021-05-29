import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
	getCountriesReducer,
	getCountryReducer,
} from './countriesReducer/countryReducer';

const reducer = combineReducers({
	countriesInfo: getCountriesReducer,
	countryInfo: getCountryReducer,
});
const middleware = [thunk];

const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
