import { Router } from 'express';
import login from '../restapi/login';
import { addTicket } from '../restapi/tickets';
import tokenCheck from '../lib/tokenCheck';
import requestCheck from '../lib/requestCheck';

const router = Router();

router.post('/login', login);

router.use(requestCheck);
router.use(tokenCheck);

router.post('/tickets', addTicket);

export default router;

