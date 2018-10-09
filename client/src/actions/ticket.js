import { API } from '../middleware/HalfpenApiCaller';

export const TicketActions = {
	GET_SOME_SUCCESS: 'GET_TICKETS_SUCCESS',
	GET_SOME_FAILURE: 'GET_TICKETS_FAILURE',
	ADD_SUCCESS: 'ADD_TICKET_SUCCESS',
	ADD_FAILURE: 'ADD_TICKET_FAILURE',
};

export const getTickets = filters => ({
	type: API.CALL,
	api: 'tickets',
	method: 'GET',
	data: filters,
	onSuccess: getTicketsSuccess,
	onFailure: getTicketsFailure,
});

const getTicketsSuccess = tickets => ({
	type: TicketActions.GET_SOME_SUCCESS,
	success: true,
	tickets,
});

const getTicketsFailure = error => ({
	type: TicketActions.GET_SOME_FAILURE,
	success: false,
	error,
});

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

