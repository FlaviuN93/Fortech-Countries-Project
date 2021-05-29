import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ErrorModal from '../components/ErrorModal';
import LoadingSpinner from '../components/LoadingSpinner';
import { getCountryById } from '../redux/countriesReducer/countryAction';
import CountryDetails from '../components/CountryDetails';

const CountryScreen = ({ match }) => {
	const dispatch = useDispatch();
	const { loading, error, country } = useSelector((state) => state.countryInfo);

	const getCountry = useCallback(
		(countryId) => {
			dispatch(getCountryById(countryId));
		},
		[dispatch]
	);

	useEffect(() => {
		getCountry(match.params.id);
	}, [getCountry, match]);

	return (
		<div>
			{loading ? (
				<LoadingSpinner />
			) : error ? (
				<ErrorModal error={error} />
			) : (
				<CountryDetails
					country={country}
					getCountryId={getCountry}></CountryDetails>
			)}
		</div>
	);
};

export default CountryScreen;
