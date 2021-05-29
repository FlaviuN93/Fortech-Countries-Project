import React, { useEffect } from 'react';
import CardComponent from './Card';
import { useSelector, useDispatch } from 'react-redux';

import './CardsOverview.css';
import { getAllCountries } from '../redux/countriesReducer/countryAction';
import LoadingSpinner from './LoadingSpinner';
import ErrorModal from './ErrorModal';

const CardsOverview = () => {
	const dispatch = useDispatch();
	const { loading, error, countries } = useSelector(
		(state) => state.countriesInfo
	);

	useEffect(() => {
		dispatch(getAllCountries());
	}, [dispatch]);

	return (
		<div className='cards-overview'>
			{loading ? (
				<LoadingSpinner />
			) : error ? (
				<ErrorModal error={error} />
			) : (
				countries.map(
					(country, index) =>
						index < 8 && (
							<CardComponent key={index} country={country}></CardComponent>
						)
				)
			)}
		</div>
	);
};

export default CardsOverview;
