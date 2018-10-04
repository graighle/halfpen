import { API } from '../middleware/HalfpenApiCaller';

export const TicketActions = {
	ADD_SUCCESS: 'ADD_TICKET_SUCCESS',
	ADD_FAILURE: 'ADD_TICKET_FAILURE',
};

export const addTicket = ticket => ({
	type: API.CALL,
	api: 'tickets',
	method: 'POST',
	data: ticket,
	onSuccess: addTicketSuccess,
	onFailure: addTicketFailure,
});

const addTicketSuccess = ticket => ({
	type: TicketActions.ADD_SUCCESS,
	success: true,
	ticket,
});

const addTicketFailure = error => ({
	type: TicketActions.ADD_FAILURE,
	success: false,
	error,
});

