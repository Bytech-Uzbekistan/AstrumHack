import { Router } from 'express';
const router = Router();
import Building from '../../models/building.model.js';
import { verifyTokenAndAdmin } from '../../middleware/verifyToken.js';

router.get('/', verifyTokenAndAdmin, async (req, res) => {
  try {
    const buildings = await Building.find();
    res.status(200).json({ buildings });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.post('/create', verifyTokenAndAdmin, async (req, res) => {
  try {
    const building = await Building.create({ name: req.body.name });
    res.status(200).json({ building });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.delete('/:id', verifyTokenAndAdmin, async (req, res) => {
  try {
    const building = await Building.findOneAndDelete({ _id: req.params.id });
    res.status(200).json({ message: 'Building has been deleted', building });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});



export default router;
