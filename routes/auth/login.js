import { Router } from 'express';
const router = Router();
import User from '../../models/user.model.js';

router.post('/', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (!user) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid credentials' });
  } else {
    user.password = undefined;
    const accessToken = jwt.sign({ user }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    });
    res.status(200).json({ user, accessToken: accessToken });
  }
});

export default router;
