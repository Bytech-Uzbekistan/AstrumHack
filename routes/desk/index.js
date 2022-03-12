import { Router } from 'express';
const router = Router();
import buildings from './building.js';

router.use('/buildings', buildings);

export default router;
