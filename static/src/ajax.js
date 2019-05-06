const $ = require('jquery');

$.ajax({
  url: '/get',
  type: 'GET',
  data: {
    user_name: $('#user_name').val(),
  },
  error() {
    console.log('error');
  },
  success(response) {
    $('#msg_user_name').html(response);
    $('#msg_user_name').fadeIn();
  },
});
