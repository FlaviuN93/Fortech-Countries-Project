export const filterCountries = (countries, category, keyword) => {
	const filteredCountries = countries.filter((country) => {
		if (category === 'region') {
			return country.region === keyword;
		} else if (category === 'currencies') {
			const filterCurrency = country.currencies.some((currency) => {
				return currency.name === keyword;
			});
			return filterCurrency;
		} else if (category === 'languages') {
			const filterLanguage = country.languages.some((language) => {
				return language.name === keyword;
			});
			return filterLanguage;
		}
	});
	return filteredCountries;
};
