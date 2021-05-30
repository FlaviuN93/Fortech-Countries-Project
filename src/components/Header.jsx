import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
	return (
		<Link to='/' style={{ textDecoration: 'none' }}>
			<div className='header'>
				<h1 style={{ color: '#ffffff', fontSize: '3rem' }}>World Countries</h1>
			</div>
		</Link>
	);
};

export default Header;
