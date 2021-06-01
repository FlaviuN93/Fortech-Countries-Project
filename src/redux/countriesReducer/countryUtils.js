export const filterCountries = (countries, category, keyword) => {
	if (category === 'region') {
		const filteredRegions = countries.filter((country) => {
			return country.region === keyword;
		});
		return filteredRegions;
	} else if (category === 'languages') {
		const filteredLanguage = countries.filter((country) => {
			return country.languages.some((language) => {
				return language.name === keyword;
			});
		});
		return filteredLanguage;
	} else if (category === 'population') {
		switch (keyword) {
			case 'Small':
				const smallCountries = countries.filter((country) => {
					console.log(keyword);
					if (country.population <= 1000000) {
						return country;
					}
					return false;
				});
				return smallCountries;

			case 'Medium':
				const mediumCountries = countries.filter((country) => {
					if (country.population > 1000000 && country.population <= 40000000) {
						return country;
					}
					return false;
				});
				return mediumCountries;
			case 'Large':
				const largeCountries = countries.filter((country) => {
					if (country.population > 40000000 && country.population <= 140000000)
						return country;
					return false;
				});
				return largeCountries;
			case 'Huge':
				const hugeCountries = countries.filter((country) => {
					if (
						country.population > 140000000 &&
						country.population <= 1500000000
					)
						return country;
					return false;
				});
				return hugeCountries;

			default:
				break;
		}
	} else if (category === 'timezones') {
		if (keyword === 'Select Timezone') {
			throw new Error('Not a correct value');
		}
		const filteredTimezone = countries.filter((country) => {
			return country.timezones.some((timezone) => {
				console.log(timezone);
				return timezone === keyword;
			});
		});
		return filteredTimezone;
	}

	// DONT KNOW WHY IT DOESN'T WORK: Currency Filters
	// }
	// else if (category === 'currencies') {
	// 	const filteredCurrency = countries.filter((country) => {
	// 		return country.currencies.some((currency) => {
	// 			return currency.name.toLowerCase().includes(keyword.toLowerCase());
	// 		});
	// 	});
	// 	return filteredCurrency;

	return filterCountries;
};
