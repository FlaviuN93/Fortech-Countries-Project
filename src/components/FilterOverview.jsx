import React from 'react';
import FilterComponent from '../components/FilterComponent';
import filterData from '../data/data';
const FilterOverview = () => {
	return (
		<div>
			{filterData.map((filterCategory) => (
				<FilterComponent key={filterCategory.id} {...filterCategory} />
			))}
		</div>
	);
};

export default FilterOverview;
