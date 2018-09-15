import { Router } from 'express';
import login from '../restapi/login';

const router = Router();

router.get('/login', login);

export default router;

