//MVP Project
//RandomPostBot8000
//Server Side code
//Alex Jungroth
var express = require('express');
var app = express();

app.use(express.static(__dirname + './../Client'));

app.get('/', function (req, res) {
  res.statuscode = 200;
  res.sendFile('/index.html');
});

app.get('/generate', function (req, res) {
  res.statuscode = 200;
  var message = {
    text: "This is what happens when you feed the animals",
    imgUrl: "http://7bna.net/images/picture/picture-10.jpg"
  };
  var jsonMessage = JSON.stringify(message);
  res.send(jsonMessage);
});

app.listen(3000, function() {
  console.log('RandomPostBot5000 is listening on port 3000!');
});