import fetch from 'cross-fetch';

export const LOGIN			= 'LOGIN';
export const LOGIN_SUCCESS	= 'LOGIN_SUCCESS';
export const LOGIN_FAILURE	= 'LOGIN_FAILURE';

export const login = (id, password) => ({
	type: LOGIN,
	halfpen: {
		api: 'login',
		apiOptions: {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-type': 'application/json',
			},
			body: JSON.stringify({id, password})
		},
	},
	onSuccess: onLoginApiSuccess,
	onError: loginError,
});

const onLoginApiSuccess = response => {
	switch(response.status){
		case 200:
			return response.json()
				.then(auth => loginSuccess(auth))
				.catch(err => loginError());
		case 401:
			return loginFailure();
		default:
			break;
	}
	return loginError();
};


const loginSuccess = auth => ({
	type: LOGIN_SUCCESS,
	halfpen: {
		options: {
			auth,
		},
	},
});

const loginFailure = () => ({
	type: LOGIN_FAILURE,
});

const loginError = error => ({
	type: LOGIN_FAILURE,
});

