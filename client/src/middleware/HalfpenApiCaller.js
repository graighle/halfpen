import fetch from 'cross-fetch';

export default function createHalfpenApiCaller(params){

	let options = Object.assign({}, params);

	return store => next => action => {
		next(action);

		if(action.halfpen){
			if(action.halfpen.options)
				options = Object.assign(options, action.halfpen.options);

			if(action.halfpen.api){
				fetch(options.url + action.halfpen.api, action.halfpen.apiOptions)
					.then(response => action.onSuccess(response))
					.then(act => store.dispatch(act))
					.catch(err => {
						if(action.onError)
							next(action.onError(err));
					});
			}
		}
	};

};

