import { createSelector } from 'reselect';

const selectCountries = (state) => state.cart;

export const selectCountriesItems = createSelector(
	[selectCountries],
	(cart) => cart.cartItems
);
