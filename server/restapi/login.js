import { Collections, collection } from '../lib/mongo';

export default function login(req, res){
	try{
		// usersコレクションにid/passwordがあればtokenを生成して返す
		// TODO:パスワードハッシュ化
		collection(Collections.USERS)
			.findOne({id:req.query.id, password:req.query.password})
			.then(function(doc){
				if(doc != null){
					res.send({
						accessToken: 'token-sample'
					});
				}else{
					res.sendStatus(401);
				}
			},
			function(err){
				console.log('[api/login] ' + err.name + ' : ' + err.message);
				res.sendStatus(500);
			})
			.catch(function(err){
				console.log('[api/login] ' + err.name + ' : ' + err.message);
				res.sendStatus(500);
			});
	}
	catch(err){
		console.log('[api/login] ' + err.name + ' : ' + err.message);
		res.sendStatus(500);
	}
}

