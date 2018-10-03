import { combineReducers } from 'redux';
import { auth } from './auth';
import tickets from './tickets';

export default combineReducers({
	auth,
	tickets,
});

