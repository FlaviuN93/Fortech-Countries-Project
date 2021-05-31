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
				return language.name.toLowerCase().includes(keyword.toLowerCase());
			});
		});
		return filteredLanguage;
	}
	return filterCountries;
};
