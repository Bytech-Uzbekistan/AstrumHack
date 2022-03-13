import { Router } from 'express';
const router = Router();
import buildings from './building.js';
import floors from './floor.js';

router.use('/buildings', buildings);
router.use('/floors', floors);

export default router;
