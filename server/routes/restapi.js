import { Router } from 'express';
import login from '../restapi/login';

const router = Router();

router.post('/login', login);

export default router;

