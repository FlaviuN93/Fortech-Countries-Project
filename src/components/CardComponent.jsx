import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CardComponent.css';

const CardComponent = ({ country }) => {
	const { flag, capital, region, name, population, alpha3Code } = country;

	return (
		<Card className='card'>
			<Link
				to={`/${name.replace(/\s/g, '-')}/${alpha3Code}`}
				style={{ textDecoration: 'none' }}>
				<Card.Img variant='top' className='card__img' src={flag} />
				<Card.Body style={{ backgroundColor: '#EEEFEF' }}>
					<Card.Title className='card__title'>{name}</Card.Title>
					<Card.Subtitle className='card__subtitle'>{region}</Card.Subtitle>
					<Card.Text className='card__text'>
						<strong>Capital</strong>: {capital}
					</Card.Text>
					<Card.Footer className='card__footer'>
						Population:{' '}
						{population.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '1.')}
					</Card.Footer>
				</Card.Body>
			</Link>
		</Card>
	);
};

export default CardComponent;
