import React, { useEffect } from 'react';
import CardComponent from './CardComponent';
import { useSelector, useDispatch } from 'react-redux';

import './CardsOverview.css';
import { getAllCountries } from '../redux/countriesReducer/countryAction';
import LoadingSpinner from './LoadingSpinner';
import { useParams } from 'react-router';
import Message from './Message';

const CardsOverview = () => {
	const params = useParams();
	const { keyword, category } = params;
	const dispatch = useDispatch();
	const { loading, error, countries } = useSelector(
		(state) => state.countriesInfo
	);

	useEffect(() => {
		dispatch(getAllCountries(keyword, category));
	}, [dispatch, keyword, category]);

	return (
		<div className='cards-overview'>
			{loading ? (
				<LoadingSpinner />
			) : error ? (
				<Message>Results not found. Try again </Message>
			) : (
				countries.map(
					(country, index) =>
						index < 16 && (
							<CardComponent key={index} country={country}></CardComponent>
						)
				)
			)}
		</div>
	);
};

export default CardsOverview;
