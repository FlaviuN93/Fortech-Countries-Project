import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import CountryScreen from './pages/CountryScreen';
import HomeScreen from './pages/HomeScreen';

const App = () => {
	return (
		<Router>
			<Route path='/' exact component={HomeScreen} />
			<Route path='/:country/:id' exact component={CountryScreen} />
			<Route path='/search/:category/:keyword' exact component={HomeScreen} />
		</Router>
	);
};

export default App;
