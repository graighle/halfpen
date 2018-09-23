import {
	LOGIN,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
} from '../actions/auth';

const initialState = {
	isLoggedin: false,
	isAuthenticating: false,
	isLoginFailed: false,
};

export function auth(state = initialState, action){
	switch(action.type){

		case LOGIN:
			return Object.assign({}, state, {
				isLoggedin: false,
				isAuthenticating: true,
				isLoginFailed: false,
			});

		case LOGIN_SUCCESS:
			return Object.assign({}, state, {
				isLoggedin: true,
				isAuthenticating: false,
				isLoginFailed: false,
			});

		case LOGIN_FAILURE:
			return Object.assign({}, state, {
				isLoggedin: false,
				isAuthenticating: false,
				isLoginFailed: true,
			});

		default:
			break;
	};

	return state;
}

