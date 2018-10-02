import jwt from 'jsonwebtoken';
import { newAuthenticationError } from '../lib/ErrorResponse';

export default function tokenCheck(req, res, next){
	const token = (req.headers['authorization'] || '').replace(/^Bearer /, '');
	if(!token)
		throw newAuthenticationError(401);

	jwt.verify(token, req.app.get('jwtSecretToken'), (err, decoded) => {
		if(err)
			throw newAuthenticationError(401, {error: 'invalid_token'});

		req.decoded = decoded;
		next();
	});
}

