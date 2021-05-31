import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import FilterComponent from '../components/FilterComponent';
import filterData from '../data/data';
import Types from '../redux/countriesReducer/countryTypes';
const FilterOverview = () => {
	const [reset, setReset] = useState(false);
	const dispatch = useDispatch();

	if (reset) {
		dispatch({ type: Types.FILTER_RESET });
	}

	return (
		<div>
			<Button
				variant='outline-primary'
				size='lg'
				value={true}
				style={{ margin: '1rem 0 2rem 0' }}
				onClick={(e) => setReset(e.target.value)}>
				Reset Filters
			</Button>
			{filterData.map((filterCategory) => (
				<FilterComponent key={filterCategory.id} {...filterCategory} />
			))}
		</div>
	);
};

export default FilterOverview;
