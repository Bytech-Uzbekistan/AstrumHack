import { Router } from 'express';
import auth from './auth/index.js';
import role from './role.js';

const router = Router();

router.use('/auth', auth);
router.use('/role', role);

export default router;
