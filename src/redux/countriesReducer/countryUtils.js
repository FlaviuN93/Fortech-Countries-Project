export const filterCountries = (countries, category, keyword) => {
	if (category === 'region') {
		const filteredRegions = countries.filter((country) => {
			return country.region === keyword;
		});
		return filteredRegions;
	} else if (category === 'currencies') {
		const filteredCurrency = countries.filter((country) => {
			return country.currencies.some((currency) => {
				return currency.name.toLowerCase().includes(keyword.toLowerCase());
			});
		});
		return filteredCurrency;
	} else if (category === 'languages') {
		const filteredLanguage = countries.filter((country) => {
			return country.languages.some((language) => {
				return language.name === keyword;
			});
		});
		return filteredLanguage;
	} else if (category === 'population') {
		if (keyword === 'Small') {
			const smallCountries = countries.filter((country) => {
				console.log(keyword);
				if (country.population <= 1000000) {
					return country;
				}
				return false;
			});
			return smallCountries;
		} else if (keyword === 'Medium') {
			const mediumCountries = countries.filter((country) => {
				if (country.population > 1000000 && country.population <= 40000000) {
					return country;
				}
				return false;
			});
			return mediumCountries;
		} else if (keyword === 'Large') {
			const largeCountries = countries.filter((country) => {
				if (country.population > 40000000 && country.population <= 140000000)
					return country;
				return false;
			});
			return largeCountries;
		} else if (keyword === 'Huge') {
			const hugeCountries = countries.filter((country) => {
				if (country.population > 140000000 && country.population <= 1500000000)
					return country;
				return false;
			});
			return hugeCountries;
		}
	}

	return filterCountries;
};
