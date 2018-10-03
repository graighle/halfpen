import { newAuthenticationError } from '../lib/ErrorResponse';
import { Collections, collection } from '../lib/mongo';

export function addTicket(req, res, next){

	collection(Collections.TICKETS)
		.insertOne(req.body)
		.then(ret => {
			res.send(ret.ops[0]);
		})
		.catch(next);

}

