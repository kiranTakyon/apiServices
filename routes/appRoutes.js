const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { validUsername, validPassword } = require('../config/credentials');
const { SECRET_KEY } = require('../middleware/auth');

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === validUsername && password === validPassword) {
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

module.exports = router;
