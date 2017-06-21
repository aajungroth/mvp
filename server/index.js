//MVP Project
//RandomPostBot8000
//Server Side code
//Alex Jungroth
var Content = require('./db/content.js');
//var Message = content.Message;
//var Image = content.Image;
var express = require('express');
var app = express();

app.use(express.static(__dirname + './../Client'));

//console.log('Content:', Content)
//console.log('Message:', Message);
//console.log('Image:', Image);

var defaultContent0 = new Content({
  text: 'This is what happens when you feed the animals',
  imageUrl: 'http://7bna.net/images/picture/picture-10.jpg'
});

var defaultContent1 = new Content({
  text: 'Clearly just a reflection',
  imageUrl: 'http://7bna.net/images/picture/picture-2.jpg'
});

var defaultContent2 = new Content({
  text: 'What are you looking at',
  imageUrl: 'http://7bna.net/images/picture/picture-3.jpg'
});
/*
defaultContent0.save(function (err, defaultContent0) {
  if (err) return console.error(err);
  console.log('defaultContent0:', defaultContent0);
});
*/
/*
defaultContent1.save(function (err, defaultContent1) {
  if (err) return console.error(err);
  console.log('defaultContent1:', defaultContent1);
});

defaultContent2.save(function (err, defaultContent2) {
  if (err) return console.error(err);
  console.log('defaultContent2:', defaultContent2);
});
*/

var content0;
var content1;
var content2;

var getRandomArbitrary = function(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

Content.find(function (err, content) {
  if (err) return console.error(err);
  //console.log(content);
  //console.log(content[0]);
  //console.log(content[content.length - 2]);
  //console.log(content[content.length - 1]);
  content0 = content[0];
  content1 = content[content.length - 2];
  content2 = content[content.length - 1];
});

app.get('/', function (req, res) {
  res.statuscode = 200;
  res.sendFile('/index.html');
});

app.get('/generate', function (req, res) {
  var message = {
      text: 'This is what happens when you feed the animals',
      imgUrl: 'http://7bna.net/images/picture/picture-10.jpg'
  };

  //console.log('random:', getRandomArbitrary(0, 3));

  //message.text = content1.text;
  //message.imgUrl = content1.imageUrl;
  var random = getRandomArbitrary(0, 3);
  if (random === 0) {
    message.text = content0.text;
  } else if (random === 1) {
    message.text = content1.text;
  } else {
    message.text = content2.text;
  }

  random = getRandomArbitrary(0, 3);
  if (random === 0) {
    message.imgUrl = content0.imageUrl;
  } else if (random === 1) {
    message.imgUrl = content1.imageUrl;
  } else {
    message.imgUrl = content2.imageUrl;
  }

  res.statuscode = 200;
  var jsonMessage = JSON.stringify(message);
  res.send(jsonMessage);
});

app.listen(3000, function() {
  console.log('RandomPostBot5000 is listening on port 3000!');
});