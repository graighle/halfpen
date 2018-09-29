import fetch from 'cross-fetch';

export const API = {
	LOGIN: 'LOGIN',
	RESTORE_TOKEN: 'RESTORE_TOKEN',
};

export default function createHalfpenApiCaller(params){

	let options = Object.assign({}, params);
	let accessToken = '';

	const login = (store, next, action) => {
		const fetchOptions = {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-type': 'application/json',
			},
			body: JSON.stringify({
				id: action.id,
				password: action.password,
			}),
		};

		fetch(options.url + 'login', fetchOptions)
			.then(response => {
				switch(response.status){
					case 200:
						response.json()
							.then(auth => {
								accessToken = auth.accessToken;
								localStorage.setItem('accessToken', accessToken);
								next(action.onSuccess());
							})
							.catch(err => next(action.onError()));
						break;

					case 401:
						next(action.onFailure());
						break;

					default:
						next(action.onError());
						break;
				}
			})
			.catch(err => next(action.onError()));
	};

	const restoreToken = (store, next, action) => {
		const token = localStorage.getItem('accessToken');
		if(token){
			accessToken = token;
			next(action.onSuccess());
		}else{
			next(action.onFailure());
		}
	};

	return store => next => action => {
		next(action);

		switch(action.type){
			case API.LOGIN:
				login(store, next, action);
				break;

			case API.RESTORE_TOKEN:
				restoreToken(store, next, action);
				break;

			default:
				break;
		}
	};

};

