import { Router } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const router = Router();
import User from '../../models/user.model.js';

router.post('/', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: 'User not found' });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid credentials' });
  } else {
    user.password = undefined;
    const accessToken = jwt.sign({ data: user }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    });
    res.status(200).json({ accessToken: accessToken });
  }
});

export default router;
