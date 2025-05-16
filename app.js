const express = require('express');
const app = express();
const port = 3000;

const promptRoutes = require('./routes/appRoutes');
const summarizeRoutes = require('./routes/summarizeRoutes');
const authRoutes = require('./routes/authRoutes');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from Node.js API!');
});

// Public route to get JWT
app.use('/', authRoutes);

// Protected routes
app.use('/', promptRoutes);
app.use('/', summarizeRoutes);

app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`);
});
