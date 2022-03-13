import { Router } from 'express';
const router = Router();
import Floor from '../../models/floor.model.js';
import Desk from '../../models/desk.model.js';

import { verifyTokenAndAdmin } from '../../middleware/verifyToken.js';

router.get('/', verifyTokenAndAdmin, async (req, res) => {
  try {
    const desks = await Desk.find();
    res.status(200).json({ desks });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.post('/create', verifyTokenAndAdmin, async (req, res) => {
  try {
    const { name, floor_id } = req.body;
    if (!name || !floor_id) {
      res.status(400).json({ message: 'Please provide name and floor_id' });
    }
    const desk = await Desk.create({ name: name });
    const floor = await Floor.findById(floor_id);
    floor.desks.push(desk._id);
    await building.save();
    res.status(200).json({ desk });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.delete('/:id', verifyTokenAndAdmin, async (req, res) => {
  try {
    const desk = await Desk.findOneAndDelete({ _id: req.params.id });
    res.status(200).json({ message: 'Desk has been deleted', desk });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.put('/:id', verifyTokenAndAdmin, async (req, res) => {
  try {
    const { name, image } = req.body;
    const desk = await Desk.findOneAndUpdate(
      { _id: req.params.id },
      { name, image },
      { new: true }
    );
    await desk.save();
    res.status(200).json({ desk });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

export default router;
