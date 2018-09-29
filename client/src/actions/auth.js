import { API } from '../middleware/HalfpenApiCaller';

export const AuthActions = {
	LOGIN: API.LOGIN,
	LOGIN_SUCCESS: 'LOGIN_SUCCESS',
	LOGIN_FAILURE: 'LOGIN_FAILURE',
	LOGIN_ERROR: 'LOGIN_ERROR',
	RESTORE_TOKEN: API.RESTORE_TOKEN,
	RESTORE_TOKEN_SUCCESS: 'RESTORE_TOKEN_SUCCESS',
	RESTORE_TOKEN_FAILURE: 'RESTORE_TOKEN_FAILURE',
	LOGOUT: API.LOGOUT,
};

export const login = (id, password) => ({
	type: AuthActions.LOGIN,
	id,
	password,
	onSuccess: loginSuccess,
	onFailure: loginFailure,
	onError: loginError,
});

const loginSuccess = () => ({
	type: AuthActions.LOGIN_SUCCESS,
});

const loginFailure = () => ({
	type: AuthActions.LOGIN_FAILURE,
});

const loginError = error => ({
	type: AuthActions.LOGIN_FAILURE,
});

export const restoreToken = () => ({
	type: AuthActions.RESTORE_TOKEN,
	onSuccess: restoreTokenSuccess,
	onFailure: restoreTokenFailure,
	onError: restoreTokenFailure,
});

const restoreTokenSuccess = () => ({
	type: AuthActions.RESTORE_TOKEN_SUCCESS,
});

const restoreTokenFailure = () => ({
	type: AuthActions.RESTORE_TOKEN_FAILURE,
});

export const logout = () => ({
	type: AuthActions.LOGOUT,
});

