const $ = require('jquery');
const console = require('console');
const render = require('./render');

document.getElementById('get').addEventListener('click', () => {
  $.ajax({
    url: '/get',
    type: 'GET',
    data: {
      url: $('#feed').val(),
    },
    error(res) {
      console.log(res);
    },
    success(res) {
      const feeds = JSON.parse(res);
      console.log(feeds);
    },
  });
});
