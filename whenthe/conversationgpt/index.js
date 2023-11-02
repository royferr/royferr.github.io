const express = require('express');
const axios = require('axios');
const fakeUserAgent = require('fake-useragent');

const ua = new fakeUserAgent();
const app = express();
const port = 3000;

const askBot = async (question) => {
  const headers = {
    'path': 'v1/chat/completions',
    'user-agent': ua.random,
  };

  const json_data = {
    'messages': [
      {
        'role': 'user',
        'content': question,
      },
    ],
    'stream': true,
    'model': 'gpt-3.5-turbo',
    'temperature': 0.7,
    'presence_penalty': 0,
  };
  try {
    const response = await axios.post(
      'https://64175708301.ai001.live/api/chat-stream',
      json_data,
      { headers }
    );
    const answer = response.data.trim();
    return answer;
  } catch (error) {
    console.log(error);
    return 'Sorry, I could not understand your question.';
  } finally {
  }
};

app.get('/', async (req, res) => {
  const question = req.query.q;
  if (!question) {
    res.status(400).send('Please provide a question.');
    return;
  }

  try {
    const answer = await askBot(question);
    res.send(answer);
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occurred while processing your request.');
  }
});

app.listen(port, () => {
  console.log(`Bot listening at http://localhost:${port}`);
});
