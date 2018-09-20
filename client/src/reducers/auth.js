import {
	LOGIN_TRY,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
} from '../actions/auth';

const initialState = {
	token: '',
	isAuthenticating: false,
	isLoginFailed: false,
};

export function auth(state = initialState, action){
	switch(action.type){

		case LOGIN_TRY:
			return Object.assign({}, state, {
				token:	'',
				isAuthenticating: true,
				isLoginFailed: false,
			});

		case LOGIN_SUCCESS:
			return Object.assign({}, state, {
				token:	action.token,
				isAuthenticating: false,
				isLoginFailed: false,
			});

		case LOGIN_FAILURE:
			return Object.assign({}, state, {
				token:	'',
				isAuthenticating: false,
				isLoginFailed: true,
			});

		default:
			break;
	};
	return state;
}


