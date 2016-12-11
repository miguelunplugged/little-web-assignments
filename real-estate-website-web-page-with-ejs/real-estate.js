var express = require('express');
var parser = require('./csv-parser.js');

var app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/api/real-estate-data', function(req, res) {
  console.log('browser');

  var callback = function(output) {
    console.log('send to browser');
    res.send
  }

  console.log('parser data');
  parser(callback);
  console.log('handler')
});

app.get('/real-estate-data', function(req, res) {
  var callback = function(output) {
    res.render('data-page', output);
  }
  parser(callback);
});

console.log('process.env', process.env);

var port = process.env.PORT || 3003;

app.listen(3003, function(){
  console.log('Listening on port 3005');
});
