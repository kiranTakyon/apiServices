const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Dummy credentials
const validUsername = "MSBPREG2528";
const validPassword = "e10adc3949ba59abbe56e057f20f883e"; // hashed '123456'

// Middleware for basic auth
function authenticate(req, res, next) {
  const { username, password } = req.body;

  if (username === validUsername && password === validPassword) {
    next();
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
}

// Base route
app.get('/', (req, res) => {
  res.send('Hello from Node.js API!');
});

// POST /pass-text-prompt
app.post('/pass-text-prompt', authenticate, (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ message: 'Prompt is required' });
  }

  const response = `Processed prompt: ${prompt}`;
  res.json({ result: response });
});

// ✅ NEW: POST /summarize
app.post('/summarize', authenticate, (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ message: 'Text is required' });
  }

  // Simulate summarization logic (or connect to OpenAI API later)
  const summary = `Summary: ${text.substring(0, 50)}...`;

  res.json({ summary });
});

app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`);
});
