var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
//db.on('error', console.error.bind(console, 'connnection error:'));
//db.once('open', function() {
  var contentSchema = mongoose.Schema({
    text: String,
    imageUrl: String
  });

  var Content = mongoose.model('Content', contentSchema);
  /*
  var messageSchema = mongoose.Schema({
    text: String
  });

  var Message = mongoose.model('Message', messageSchema);
  */
  /*
  var defaultMessage0 = new Message({
    text: 'This is what happens when you feed the animals'
  });

  defaultMessage0.save(function (err, defaultMessage0) {
    if (err) return console.error(err);
    console.log('defaultMessage0:', defaultMessage0);
  });
  */
  /*var imageSchema = mongoose.Schema({
    imgUrl: String
  });

  var Image = mongoose.model('Image', imageSchema);*/
  /*
  var defaultImage0 = new Image({
    imgUrl: 'http://7bna.net/images/picture/picture-10.jpg'
  });

  defaultImage0.save(function (err, defaultImage0) {
    if (err) return console.error(err);
    console.log('defaultImage0:', defaultImage0);
  });
  */
//});

//module.exports = Message;
//module.exports.Image;
module.exports = Content;