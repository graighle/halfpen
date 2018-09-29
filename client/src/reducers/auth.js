import { AuthActions } from '../actions/auth';

const initialState = {
	isLoggedin: false,
	doRestoreToken: true,
	isAuthenticating: false,
	isLoginFailed: false,
	isLoginError: false,
};

export function auth(state = initialState, action){
	switch(action.type){

		case AuthActions.LOGIN:
			return Object.assign({}, state, {
				isLoggedin: false,
				doRestoreToken: true,
				isAuthenticating: true,
				isLoginFailed: false,
				isLoginError: false,
			});

		case AuthActions.LOGIN_SUCCESS:
			return Object.assign({}, state, {
				isLoggedin: true,
				doRestoreToken: true,
				isAuthenticating: false,
				isLoginFailed: false,
				isLoginError: false,
			});

		case AuthActions.LOGIN_FAILURE:
			return Object.assign({}, state, {
				isLoggedin: false,
				doRestoreToken: false,
				isAuthenticating: false,
				isLoginFailed: true,
				isLoginError: false,
			});

		case AuthActions.LOGIN_ERROR:
			return Object.assign({}, state, {
				isLoggedin: false,
				doRestoreToken: false,
				isAuthenticating: false,
				isLoginFailed: false,
				isLoginError: true,
			});

		case AuthActions.RESTORE_TOKEN:
			return state;

		case AuthActions.RESTORE_TOKEN_SUCCESS:
			return Object.assign({}, state, {
				isLoggedin: true,
				doRestoreToken: true,
				isAuthenticating: false,
				isLoginFailed: false,
				isLoginError: false,
			});

		case AuthActions.RESTORE_TOKEN_FAILURE:
			return Object.assign({}, state, {
				isLoggedin: false,
				doRestoreToken: false,
			});

		case AuthActions.LOGOUT:
			return Object.assign({}, state, {
				isLoggedin: false,
				doRestoreToken: false,
			});

		default:
			break;
	};

	return state;
}

