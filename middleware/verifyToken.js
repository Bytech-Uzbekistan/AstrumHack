import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        res.status(403).json({ message: 'Token is not valid' });
      }
      req.user = user;
      next();
    });
  } else {
    res.status(401).json({ message: 'You are not authenticated' });
  }
};

// const verifyTokenAndAuth = (req, res, next) => {
//   verifyToken(req, res, () => {
//     if (req.user.data.id == req.params.id || req.user.data.isAdmin) {
//       next();
//     } else {
//       res
//         .status(403)
//         .json({ message: 'You ar not allowed to take this action' });
//     }
//   });
// };

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.data.isAdmin) {
      next();
    } else {
      res.status(403).json({
        message: 'You are not allowed to take this action | YOU ARE NOT ADMIN',
      });
    }
  });
};

export { verifyToken, verifyTokenAndAdmin };
