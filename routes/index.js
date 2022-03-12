import { Router } from 'express';
import auth from './auth/index.js';
import role from './role.js';
import desk from './desk/index.js';

const router = Router();

router.use('/auth', auth);
router.use('/role', role);
router.use('/desk', desk);

export default router;
