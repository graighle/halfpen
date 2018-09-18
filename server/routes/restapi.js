import { Router } from 'express';
import login from '../restapi/login';
import { getProjects } from '../restapi/projects';
import tokenCheck from '../lib/tokenCheck';

const router = Router();

router.post('/login', login);

router.use(tokenCheck);

export default router;

