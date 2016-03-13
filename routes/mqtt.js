var mqtt    = require('mqtt');
var client  = mqtt.connect([{ host: 'localhost', port: 1883 }]);
var express = require('express');
var router = express.Router();
var io  = require('socket.io').listen(5000);
var sensorList = require('../data/sensors.json');

io.sockets.on('connection', function (socket) {
	  socket.on('subscribe', function (data) {
	    console.log('Subscribing to ' + data.topic);
	    client.subscribe(data.topic);
	  });
	});


client.on('connect', function () {
// client.subscribe('test');
// client.publish('test', 'Hello mqtt');
});
 
client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString());

  io.sockets.emit('mqtt',{'topic':String(topic), 'payload': message.toString()});  
});

router.get('/', function(req, res, next) {
	  res.render('mqtt', {	sensors: sensorList, 
		  					title: 'Mqtt'});
	});

module.exports = router;