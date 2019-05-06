const express = require('express');
const Parser = require('rss-parser');

const parser = new Parser();
const app = express();

(async () => {
  const feed = await parser.parseURL('https://www.bnext.com.tw/rss');
  console.log(feed.title);
  console.log(feed.description);
  console.log(feed.link);
  feed.items.forEach((element) => {
    // console.log(element);
    console.log(element.title);
    console.log(element.contentSnippet);
  });
})();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
