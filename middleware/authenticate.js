const authenticate = (req, res, next) => {
  const requestHeader = req.headers['authorization'];
  const token = requestHeader && requestHeader.split(' ')[1];
  if (token == null) {
    return res.status(403).json({ message: 'Invalid credentials' }); // Forbidden
  }
  jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
    if (error) {
      return res.status(403).json({ message: 'Invalid credentials' }); // Forbidden
    }
    req.user = user;
    next();
  });
};

const isAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied' });
  }
  next();
};

const isModerator = (req, res, next) => {
  if (req.user.role !== 'moderator') {
    return res.status(403).json({ message: 'Access denied' });
  }
  next();
};

const isMentor = (req, res, next) => {
  if (req.user.role !== 'mentor') {
    return res.status(403).json({ message: 'Access denied' });
  }
  next();
};

const isMember = (req, res, next) => {
  if (req.user.role !== 'member') {
    return res.status(403).json({ message: 'Access denied' });
  }
  next();
};

export { authenticate, isAdmin, isModerator, isMentor, isMember };
