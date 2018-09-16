import ErrorResponse from '../lib/ErrorResponse';
import { Collections, collection } from '../lib/mongo';

export default function login(req, res, next){
	try{
		if(!req.is('application/json'))
			throw new ErrorResponse({status:400});

		// usersコレクションにid/passwordがあればtokenを生成して返す
		// TODO:パスワードハッシュ化
		collection(Collections.USERS)
			.findOne({id:req.body.id, password:req.body.password})
			.then(doc => {
				if(doc === null)
					throw new ErrorResponse({status:401});
				return doc;
			})
			.then(doc => {
				res.send({
					accessToken: 'token-sample'
				});
			})
			.catch(err => {
				if('status' in err){
					res.sendStatus(err.status);
				}else{
					console.log('[api/login] ' + err.name + ' : ' + err.message);
					next(err);
				}
			});
	}
	catch(err){
		if('status' in err){
			res.sendStatus(err.status);
		}else{
			console.log('[api/login] ' + err.name + ' : ' + err.message);
			next(err);
		}
	}
}

