const jwt = require('jsonwebtoken');

// Replace with your own secret key in production
const SECRET_KEY = 'your_super_secret_key';

function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1];

    try {
      const decoded = jwt.verify(token, SECRET_KEY);
      req.user = decoded;
      next();
    } catch (err) {
      return res.status(403).json({ message: 'Invalid or expired token' });
    }
  } else {
    return res.status(401).json({ message: 'Authorization header missing or malformed' });
  }
}

module.exports = authenticate;
module.exports.SECRET_KEY = SECRET_KEY;
