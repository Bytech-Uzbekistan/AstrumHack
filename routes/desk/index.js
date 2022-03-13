import { Router } from 'express';
const router = Router();
import buildings from './building.js';
import floors from './floor.js';
import desks from './desk.js';

router.use('/buildings', buildings);
router.use('/floors', floors);
router.use('/desks', desks);

export default router;
