import { Router } from 'express';
import login from '../restapi/login';
import {
	getTickets,
	addTicket
} from '../restapi/tickets';
import tokenCheck from '../lib/tokenCheck';
import requestCheck from '../lib/requestCheck';

const router = Router();

router.post('/login', login);

router.use(requestCheck);
router.use(tokenCheck);

router.get('/tickets', getTickets);
router.post('/tickets', addTicket);

export default router;

