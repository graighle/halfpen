import { newAuthenticationError } from '../lib/ErrorResponse';

export default function requestCheck(req, res, next){
	if(req.method !== 'GET'){
		if(!req.is('application/json'))
			throw newAuthenticationError(400, {'error': 'invalid_request'});
	}

	next();
}

