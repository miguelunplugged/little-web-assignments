//var express = require('express');
//var app = express();

//app.listen(3001, function() {
//  console.log('Listening on port 3001');
//});



var express = require("express");

var app = express();

app.use(express.static('public'))

app.listen(3005, function() {
  console.log('Listening on port 3005');
});
