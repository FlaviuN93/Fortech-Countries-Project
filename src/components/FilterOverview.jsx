import { Button, Dropdown } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import { useDispatch } from 'react-redux';
import FilterComponent from '../components/FilterComponent';
import filterData from '../data/data';
import Types from '../redux/countriesReducer/countryTypes';
const FilterOverview = () => {
	const [reset, setReset] = useState(false);
	const dispatch = useDispatch();
	const minWidth = useMediaQuery('only screen and (max-width:37.5em)');

	useEffect(() => {
		if (reset) {
			dispatch({ type: Types.FILTER_RESET });
			setReset(false);
		}
	}, [dispatch, reset]);

	return (
		<div>
			{minWidth ? (
				<Dropdown>
					<Dropdown.Toggle
						variant='outline-primary'
						id='dropdown-basic'
						style={{ margin: '1rem 2rem' }}>
						Filters...
					</Dropdown.Toggle>

					<Dropdown.Menu>
						<Dropdown.Item>
							{filterData.map((filterCategory) => (
								<FilterComponent key={filterCategory.id} {...filterCategory} />
							))}
							<Button
								variant='outline-primary'
								size='lg'
								value={true}
								style={{ margin: '1rem 0 2rem 0' }}
								className='filter_btn'
								onClick={(e) => setReset(e.target.value)}>
								Reset Filters
							</Button>
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			) : (
				<>
					{' '}
					<Button
						variant='outline-primary'
						size='lg'
						value={true}
						style={{ margin: '1rem 0 2rem 0' }}
						className='filter_btn'
						onClick={(e) => setReset(e.target.value)}>
						Reset Filters
					</Button>
					{filterData.map((filterCategory) => (
						<FilterComponent key={filterCategory.id} {...filterCategory} />
					))}
				</>
			)}
		</div>
	);
};

export default FilterOverview;
