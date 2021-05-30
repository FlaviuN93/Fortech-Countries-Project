import React, { useState } from 'react';
import { Button, Dropdown, Form } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './SearchComponent.css';

const SearchComponent = () => {
	const [keyword, setKeyword] = useState('');
	const [category, setCategory] = useState('');
	const history = useHistory();

	const submitHandler = (event) => {
		event.preventDefault();
		if (category === '' && keyword.trim()) {
			history.push(`/search/name/${keyword}`);
		} else if (category !== '' && keyword.trim()) {
			history.push(`/search/${category}/${keyword}`);
		} else {
			history.push(``);
		}
	};

	return (
		<>
			<Form onSubmit={submitHandler} className='search_form'>
				<div className='search_checkbox'>
					<Dropdown>
						<Dropdown.Toggle variant='outline-primary' id='dropdown'>
							Search By...
						</Dropdown.Toggle>

						<Dropdown.Menu
							style={{
								padding: '.5rem',
								fontSize: '1.2rem',
							}}>
							{' '}
							<Form.Check
								type='radio'
								name='search'
								label='Name'
								value='name'
								onClick={(e) => setCategory(e.target.value)}
							/>{' '}
							<Form.Check
								type='radio'
								name='search'
								label='Country Code'
								value='alpha'
								onClick={(e) => setCategory(e.target.value)}
							/>{' '}
							<Form.Check
								type='radio'
								name='search'
								label='Capital'
								value='capital'
								onClick={(e) => setCategory(e.target.value)}
							/>
						</Dropdown.Menu>
					</Dropdown>
				</div>
				<div>
					<Form.Control
						type='text'
						onChange={(e) => setKeyword(e.target.value)}
						className='search_field mr-2'
						placeholder='Search Countries...'></Form.Control>
				</div>
				<Button
					type='submit'
					size='sm'
					variant='primary'
					className='search_btn'>
					Search
				</Button>
			</Form>
		</>
	);
};

export default SearchComponent;
