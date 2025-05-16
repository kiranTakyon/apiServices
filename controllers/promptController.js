exports.processPrompt = (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ message: 'Prompt is required' });
  }

  const response = `Processed prompt: ${prompt}`;
  res.json({ result: response });
};
