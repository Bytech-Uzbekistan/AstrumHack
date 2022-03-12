import { Router } from 'express';
const router = Router();
import Building from '../../models/building.model.js';
import { authenticate, isAdmin } from '../../middleware/authenticate.js';

router.get('/', authenticate, isAdmin, async (req, res) => {
  try {
    const buildings = await Building.find();
    res.status(200).json({ buildings });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.post('/create', authenticate, isAdmin, async (req, res) => {
  try {
    const building = await Building.create({ name: req.body.name });
    res.status(200).json({ building });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

export default router;
