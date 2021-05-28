import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import CountryDetails from './pages/CountryDetails';
import HomeScreen from './pages/HomeScreen';

const App = () => {
	return (
		<Router>
			<Route path='/' exact component={HomeScreen} />
			<Route path='/:country/:id' component={CountryDetails} />
		</Router>
	);
};

export default App;
