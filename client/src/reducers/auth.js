const initialState = {
	token:	'',
};

export function auth(state = initialState, action){
	switch(action.type){

		case 'LOGIN':
			return Object.assign({}, state, {
				token: 'aaa'
			});

		default:
			break;
	};
	return state;
}

