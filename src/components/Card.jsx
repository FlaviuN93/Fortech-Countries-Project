import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCountries } from '../redux/countriesReducer/countryAction';

import { Button, Card } from 'react-bootstrap';

const CardComponent = ({ flagImg, name, capital, region, population }) => {
	const dispatch = useDispatch();
	const { countries, loading } = useSelector((state) => state.countries);
	useEffect(() => {
		dispatch(getAllCountries());
	}, [dispatch]);
	console.log(countries);
	return (
		<Card style={{ width: '18rem' }}>
			<Card.Img variant='top' src='#' />
			<Card.Body>
				<Card.Title>Card Title</Card.Title>
				<Card.Text>
					Some quick example text to build on the card title and make up the
					bulk of the card's content.
				</Card.Text>
				<Button variant='primary'>Go somewhere</Button>
			</Card.Body>
		</Card>
	);
};

export default CardComponent;
