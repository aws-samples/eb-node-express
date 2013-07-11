var uuid = require('node-uuid');

exports.index = function(req, res) {
  res.app.get('connection').query( 'SELECT * FROM HIKES', function(err, rows) {
    if (err) {
      res.send(err);
    } else {
      console.log(JSON.stringify(rows));
      res.render('hike', {title: 'My Hiking Log', hikes: rows});
  }});
};

exports.add_hike = function(req, res){
};