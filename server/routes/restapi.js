import { Router } from 'express';
import login from '../restapi/login';
import { getProjects } from '../restapi/projects';
import tokenCheck from '../lib/tokenCheck';
import requestCheck from '../lib/requestCheck';

const router = Router();

router.post('/login', login);

router.use(requestCheck);
router.use(tokenCheck);

export default router;

