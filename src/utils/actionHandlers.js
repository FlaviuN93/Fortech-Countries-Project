function setPending(state) {
	return { ...state, loading: true };
}

function setError(state, action) {
	return { ...state, error: action.payload, loading: false };
}

function setSuccess(state) {
	return { ...state, success: true };
}

const setPayload = (path) => (state, action) => {
	return {
		...state,
		[path]: action.payload,
		loading: false,
	};
};

export { setPending, setError, setSuccess, setPayload };
