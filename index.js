const express = require('express');
const Parser = require('rss-parser');
const console = require('console');
const path = require('path');

const parser = new Parser();
const app = express();

app.use(express.static('static/dist'));

app.get('/', async (req, res) => {
  res.sendFile(path.resolve('static/dist/index.html'));
});

app.get('/get', async (req, res) => {
  const feed = await parser.parseURL('https://www.bnext.com.tw/rss');

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(feed));
});

app.get('/save', async (req, res) => {
  const feed = await parser.parseURL('https://www.bnext.com.tw/rss');

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(feed));
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
