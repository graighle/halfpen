import jwt from 'jsonwebtoken';
import { ErrorResponse } from '../lib/ErrorResponse';
import { Collections, collection } from '../lib/mongo';

export default function login(req, res, next){
	if(!req.is('application/json'))
		throw new ErrorResponse({status: 400});

	// usersコレクションにid/passwordがあればtokenを生成して返す
	// TODO:パスワードハッシュ化
	collection(Collections.USERS)
		.findOne({
			id: req.body.id,
			password: req.body.password
		})
		.then(user => {
			if(user === null)
				throw new ErrorResponse({status: 401});

			const token = jwt.sign(user, req.app.get('jwtSecretToken'), { expiresIn: '24h' });
			res.send({
				accessToken: token
			});
		})
		.catch(next);
}

