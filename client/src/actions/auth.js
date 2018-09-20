import fetch from 'cross-fetch';

export const LOGIN_TRY		= 'LOGIN_TRY';
export const LOGIN_SUCCESS	= 'LOGIN_SUCCESS';
export const LOGIN_FAILURE	= 'LOGIN_FAILURE';

const loginTry = (id, password) => ({
	type: LOGIN_TRY,
	id,
	password,
});

const loginSuccess = token => ({
	type: LOGIN_SUCCESS,
	token,
});

const loginFailure = () => ({
	type: LOGIN_FAILURE,
});

export const login = (id, password) => {
	return (dispatch) => {
		dispatch(loginTry(id, password));

		return fetch('http://localhost:5000/api/login')
			.then(response => dispatch(loginSuccess(response.token)))
			.catch(err => dispatch(loginFailure('error')));
	};
};
