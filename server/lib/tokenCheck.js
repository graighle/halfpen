import jwt from 'jsonwebtoken';
import ErrorResponse from '../lib/ErrorResponse';

export default function tokenCheck(req, res, next){

	try{
		var token = req.body.token || req.query.token || req.headers['x-access-token'];
		if(!token)
			throw new ErrorResponse({status:401});

		jwt.verify(token, req.app.get('jwtSecretToken'), function(err, decoded){
			if(err)
				throw new ErrorResponse({status:401});
			req.decoded = decoded;
			console.log(decoded);
			next();
		});
	}
	catch(err){
		if('status' in err){
			res.sendStatus(err.status);
		}else{
			console.log('[api/getProjects] ' + err.name + ' : ' + err.message);
			next(err);
		}
	}
}

