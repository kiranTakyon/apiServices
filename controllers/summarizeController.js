exports.summarizeText = (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ message: 'Text is required' });
  }

  const summary = `Summary: ${text.substring(0, 50)}...`;
  res.json({ summary });
};
