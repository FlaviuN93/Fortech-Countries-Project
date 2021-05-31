import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCurrentTime } from '../utils/getCurrentTime';
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
					<Link className='country_btn country_link' to='/'>
						Go Back
					</Link>

					<div className='country'>
						<div>
							<img src={flag} alt='flag' className='country_img' />
						</div>
						<div className='country_body'>
							<h1 className='country_title'>{name}</h1>

							<div className='country_details-grid'>
								<div>
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
								<div>
									<p>
										<strong>Timezone: </strong> {timezones}
									</p>
									<p>
										<strong>Current Time: </strong>{' '}
										{getCurrentTime(timezones[0])}
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
