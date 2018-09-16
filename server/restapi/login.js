import { Collections, collection } from '../lib/mongo';

export default function login(req, res, next){
	try{
		if(!req.is('application/json')){
			res.sendStatus(400);
			return;
		}

		// usersコレクションにid/passwordがあればtokenを生成して返す
		// TODO:パスワードハッシュ化
		collection(Collections.USERS)
			.findOne({id:req.body.id, password:req.body.password})
			.then(function(doc){
				if(doc != null){
					res.send({
						accessToken: 'token-sample'
					});
				}else{
					res.sendStatus(401);
				}
			})
			.catch(function(err){
				console.log('[api/login] ' + err.name + ' : ' + err.message);
				next(err);
			});
	}
	catch(err){
		console.log('[api/login] ' + err.name + ' : ' + err.message);
		next(err);
	}
}

