exports.summarizeText = (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ message: 'Text is required' });
  }

  
  const prompt = `(Note: the response should be suitable for children and generate answers as fast as possible)\n\n` +
                 `Summarize the following academic content in a clear, concise, and easy-to-understand manner suitable for students and educators:\n\n` +
                 `${text}`;

  
  const summary = `Summary: ${text.substring(0, 50)}...`;

  
  console.log('Generated Prompt:\n', prompt);

  res.json({ summary, prompt }); 
};
