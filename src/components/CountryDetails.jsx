import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './CountryDetails.css';
import LoadingSpinner from './LoadingSpinner';

const CountryDetails = ({ country, getCountryId }) => {
	const { flag, name, alpha3Code, capital, region, population } = country;
	const { latlng, area, timezones, borders, currencies, languages } = country;
	const { loading } = useSelector((state) => state.countryInfo);

	return (
		<>
			{' '}
			{loading ? (
				<LoadingSpinner />
			) : (
				<>
					<Link className='btn btn-light my-3' to='/'>
						Go Back
					</Link>

					<div className='country'>
						<div>
							<img src={flag} alt='flag' className='flag_item' />
						</div>
						<div style={{ justifySelf: 'start' }}>
							<h1 className='country_title'>{name}</h1>

							<div className='country_grid'>
								<div className='country_col-1'>
									<p>
										<strong>Region: </strong> {region}
									</p>
									<p>
										<strong>Capital: </strong> {capital}
									</p>
									<p>
										<strong>Population: </strong>{' '}
										{population
											.toString()
											.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '1.')}
									</p>
									<p>
										<strong>Area: </strong> {area}
									</p>
									<p>
										<strong>Location: </strong>{' '}
										{`[ ${latlng[0].toFixed(2)}° lat : ${latlng[1].toFixed(
											2
										)}° long ]`}
									</p>
								</div>
								<div className='country_col-2'>
									<p>
										<strong>Timezone: </strong> {timezones[0]}
									</p>
									<p>
										<strong>Current Time: </strong> {}
									</p>
									<p>
										<strong>Code: </strong> {alpha3Code}
									</p>
									<p>
										<strong>Currencies: </strong>{' '}
										{`[ ${currencies.map((currency) => ' ' + currency.name)} ]`}
									</p>
									<p>
										<strong>Languages: </strong>{' '}
										{`[ ${languages.map((language) => ' ' + language.name)} ]`}
									</p>
								</div>
							</div>
							<h4>Border Countries: </h4>
							{borders.length === 0 ? (
								<span
									style={{
										fontSize: '1.3rem',
										fontWeight: '500',
									}}>
									{' '}
									No Neighbours
								</span>
							) : (
								borders.map((neighbour, index) => (
									<Link
										key={index}
										onClick={() => getCountryId(neighbour)}
										className='country_link'
										to={`/${name.replace(/\s/g, '-')}/${neighbour}`}>
										{neighbour}
									</Link>
								))
							)}
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default CountryDetails;
