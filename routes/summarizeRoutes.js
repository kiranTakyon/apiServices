const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/auth');
const { summarizeText } = require('../controllers/summarizeController');

router.post('/summarize', authenticate, summarizeText);

module.exports = router;
