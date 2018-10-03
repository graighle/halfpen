import fetch from 'cross-fetch';

export const API = {
	LOGIN: 'LOGIN',
	LOGOUT: 'LOGOUT',
	RESTORE_TOKEN: 'RESTORE_TOKEN',
	CALL: 'HALFPEN_API_CALL',
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

	const logout = (store, next, action) => {
		localStorage.removeItem('accessToken');
		next(action);
	};

	const call = (store, next, action) => {
		const fetchOptions = {
			method: action.method,
			headers: {
				'Accept': 'application/json',
				'Content-type': 'application/json',
				'Authorization': 'Bearer ' + accessToken,
			},
			body: JSON.stringify(action.data),
		};

		return
			fetch(options.url + action.api, fetchOptions)
				.then(response => {
					switch(response.status){
						case 200:
							return response.json()
								.then(data => next(action.onSuccess(data)))
								.catch(err => next(action.onFailure()));
							break;

						case 401:
							return next(action.onFailure());
							break;

						default:
							return next(action.onFailure());
							break;
					}
				})
				.catch(err => next(action.onFailure()))
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

			case API.LOGOUT:
				logout(store, next, action);
				break;

			case API.CALL:
				return call(store, next, action);

			default:
				break;
		}
	};

};

