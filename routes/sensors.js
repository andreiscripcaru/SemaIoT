var express = require('express');
var router = express.Router();
var sensors = require('../data/sensors.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('sensors', { sensorList: sensors ,
	  						title: 'Sensors'});
});

module.exports = router;
