import React from 'react';
import CardsOverview from '../components/CardsOverview';
import Header from '../components/Header';
import SearchComponent from '../components/SearchComponent';
import '../App.css';
import FilterOverview from '../components/FilterOverview';

const HomeScreen = () => {
	return (
		<>
			<Header></Header>
			<SearchComponent />
			<main className='main_container'>
				<FilterOverview />
				<CardsOverview />;
			</main>
		</>
	);
};

export default HomeScreen;
