import React, { useState } from 'react';
import { Accordion, Button, Card, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import Types from '../redux/countriesReducer/countryTypes';
import './FilterComponent.css';

const FilterComponent = ({ categoryNames, title }) => {
	const [keyword, setKeyword] = useState('');
	const [category, setCategory] = useState('');
	// const history = useHistory();
	const dispatch = useDispatch();

	const onClickHandler = (event) => {
		event.preventDefault();
		if (keyword !== '' && category !== '') {
			dispatch({
				type: Types.ADD_FILTER_INFO,
				payload: [category.toLowerCase(), keyword.toLowerCase()],
			});
			// 		history.push(
			// 			`/search/${category.toLowerCase()}/${keyword.toLowerCase()}`
			// 		);
		}
	};

	return (
		<>
			<Form onClick={onClickHandler}>
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
			</Form>
		</>
	);
};

export default FilterComponent;