let express = require('express');
let Parser = require('rss-parser');
let parser = new Parser();
let request = require('request');

var app = express();

(async () => {
    let feed = await parser.parseURL('https://www.bnext.com.tw/rss');
    console.log(feed.title);
    console.log(feed.description);
    console.log(feed.link);
    for(item in feed.items){
        console.log(feed.items[item].title);
        console.log(feed.items[item].contentSnippet);
    }
})();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

