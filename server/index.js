//MVP Project
//RandomPostBot8000
//Server Side code
//Alex Jungroth
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.statuscode = 200;
  res.send('Hello World!');
});

app.listen(3000, function() {
  console.log('RandomPostBot5000 is listening on port 3000!');
});