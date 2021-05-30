// import { createSelector } from 'reselect';
// const selectCountries = (state) => state.countriesInfo;
// const filterInfo = (state) => state.addFilterInfo;

// export const filterCountrySelector = createSelector(
// 	selectCountries,
// 	filterInfo,
// 	(countries) =>
// 		countries.filter((country) => {
// 			if (filterInfo[0] === 'region') {
// 				return filterInfo[1] === country.region;
// 			} else if (filterInfo[0] === 'currencies') {
// 				const mapCurrency = country.currencies.map((currency) => {
// 					if (filterInfo[1] !== currency) {
// 						return null;
// 					}
// 					return currency;
// 				});
// 				return mapCurrency;
// 			} else if (filterInfo[0] === 'languages') {
// 				const mapLanguage = country.languages.map((language) => {
// 					if (filterInfo[1] !== language) {
// 						return null;
// 					}
// 					return language;
// 				});
// 				return mapLanguage;
// 			}
// 		})
// );
