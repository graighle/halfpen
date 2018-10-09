import { TicketActions } from '../actions/ticket';

const initialState = {
	byId: {},
	allIds: [],
};

export default function tickets(state = initialState, action){
	switch(action.type){

		case TicketActions.GET_SOME_SUCCESS:
			return Object.assign({}, state, {
				byId: action.tickets.reduce((obj, ticket) => ({...obj, [ticket.id]: ticket}), {}),
				allIds: action.tickets.map(ticket => ticket.id),
			});

		default:
			break;
	};

	return state;
}

