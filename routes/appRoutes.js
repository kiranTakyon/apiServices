const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/auth');
const { processPrompt } = require('../controllers/promptController');

router.post('/pass-text-prompt', authenticate, processPrompt);

module.exports = router;
