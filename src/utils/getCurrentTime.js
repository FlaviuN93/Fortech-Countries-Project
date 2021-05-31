export const getCurrentTime = (timezone) => {
	const offset = parseFloat(
		timezone.slice(3, 9).replace(':', '.').replace('.3', '.5')
	);
	const currentTime = new Date(new Date().getTime() + offset * 3600 * 1000)
		.toUTCString()
		.replace(/ GMT$/, '');
	return currentTime;
};
