const { validUsername, validPassword } = require('../config/credential');

function authenticate(req, res, next) {
  const { username, password } = req.body;

  if (username === validUsername && password === validPassword) {
    next();
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
}

module.exports = authenticate;
