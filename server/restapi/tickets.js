import { newAuthenticationError } from '../lib/ErrorResponse';
import { Collections, collection } from '../lib/mongo';

export function getTickets(req, res, next){

	collection(Collections.TICKETS)
		.find({})
		.toArray()
		.then(tickets => {
			res.send(tickets);
		})
		.catch(next);

}

export function addTicket(req, res, next){

	const data = Object.assign({}, req.body, {
		created: new Date(),
	});

	collection(Collections.TICKETS)
		.insertOne(data)
		.then(ret => {
			res.send(ret.ops[0]);
		})
		.catch(next);

}

