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

	let ticket_id = null;

	collection(Collections.COUNTERS)
		.findOneAndUpdate({name: 'ticket_id'}, {$inc: {value: 1}}, {returnOriginal:false})
		.then(ret => {
			ticket_id = ret.value.value;
			return collection(Collections.TICKETS)
				.insertOne({
					id: ticket_id,
					created: new Date(),
					...req.body,
				});
		})
		.then(ret => {
			res.send(ret.ops[0]);
		})
		.catch(next);

}

