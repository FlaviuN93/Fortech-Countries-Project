import React, { useEffect, useState } from 'react';
import { Accordion, Button, Card, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { getFilteredCountries } from '../redux/countriesReducer/countryAction';
import './FilterComponent.css';

const FilterComponent = ({ categoryNames, title }) => {
	const [keyword, setKeyword] = useState('');
	const [category, setCategory] = useState('');
	const dispatch = useDispatch();

	useEffect(() => {
		if (keyword !== '' && category !== '') {
			dispatch(getFilteredCountries(category.toLowerCase(), keyword));
		}
	}, [dispatch, keyword, category]);

	return (
		<>
			<Accordion defaultActiveKey='1'>
				<Card className='filter_card'>
					<Card.Header>
						<Accordion.Toggle
							as={Button}
							variant='link'
							className='filter_accordion'
							style={{ textDecoration: 'none' }}
							value={title}
							onClick={(el) => setCategory(el.target.value)}
							eventKey='0'>
							{title}
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey='0'>
						<Card.Body className='card_options'>
							{categoryNames.map((name, index) => (
								<Form.Check
									key={index}
									type='radio'
									name='filter'
									label={name}
									value={name}
									onClick={(el) => setKeyword(el.target.value)}
								/>
							))}
						</Card.Body>
					</Accordion.Collapse>
				</Card>
			</Accordion>{' '}
		</>
	);
};

export default FilterComponent;
