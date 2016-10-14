var friendsController = require('../controllers/friends.js');

module.exports = function(app){
 	app.get('/friends', function(req, res){
		friendsController.index(req, res);
  	});
  	app.get('/friends/:id', function(req, res){
  		friendsController.show(req, res);
  	});
  	app.post('/friends', function(req, res){
  		friendsController.create(req, res);
  	});
  	app.put('/friends/:id', function(req, res){
      console.log(req.params)
      console.log("CHINA")
  		friendsController.update(req, res);
  	});
  	app.delete('/friends/:id', function(req, res){
  		friendsController.deleted(req, res);
  	});
}

