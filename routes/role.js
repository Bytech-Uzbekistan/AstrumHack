import { Router } from 'express';
const router = Router();
import Role from '../models/role.model.js';

router.get('/:role', async (req, res) => {
  try {
    const role = await Role.create({ name: req.params.role });
    res.status(200).json({ role });
  } catch (err) {
    res.status(500).json({ err });
  }
});

export default router;
