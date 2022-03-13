import { Router } from 'express';
const router = Router();
import Floor from '../../models/floor.model.js';
import Building from '../../models/building.model.js';

import { verifyTokenAndAdmin } from '../../middleware/verifyToken.js';

router.get('/', verifyTokenAndAdmin, async (req, res) => {
  try {
    const floors = await Floor.find();
    res.status(200).json({ floors });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.post('/create', verifyTokenAndAdmin, async (req, res) => {
  try {
    const { name, building_id } = req.body;
    const floor = await Floor.create({ name: name });
    const building = await Building.findById(building_id);
    building.floors.push(floor._id);
    await building.save();
    res.status(200).json({ floor });
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

router.put('/:id', verifyTokenAndAdmin, async (req, res) => {
  try {
    const building = await Building.findOne(
      { _id: req.params.id },
      {
        name: req.body.name,
        image: req.body.image,
      },
      { new: true }
    );
    res.status(200).json({ building });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

export default router;
