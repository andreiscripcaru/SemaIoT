var express = require('express');
var router = express.Router();

userList = require('../data/users.json');


/* GET users listing. */
router.get('/', function(req, res, next) {
	  res.render('users', 
			  { userList: userList, title: 'Users'});
});

module.exports = router;
