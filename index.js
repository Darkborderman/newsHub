const express = require('express');
const Parser = require('rss-parser');
const console = require('console');

const parser = new Parser();
const app = express();

app.use(express.static('static/dist'));

(async () => {
  const feed = await parser.parseURL('https://www.bnext.com.tw/rss');
  console.log(feed.title);
  console.log(feed.description);
  console.log(feed.link);
  feed.items.forEach((element) => {
    console.log(element.title);
    console.log(element.contentSnippet);
  });
})();

app.get('/', async (req, res) => {
  res.sendFile('index.html');
});

app.get('/get', async (req, res) => {
  res.sendFile('index.html');
});

app.get('/save', async (req, res) => {
  res.sendFile('index.html');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
