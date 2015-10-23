// Dependences
var express = require('express'),
	app     = express(),
	http    = require('http').Server(app),
	io      = require('socket.io')(http);

app.use(express.static('public'));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	console.log('nouvelle connection');

	socket.on('disconnect', function(socket){
		console.log('utilisateur deconnecté');
	});

	socket.on('chat message', function(message){
		console.log(message[0] + ': ' + message[1]);
		io.emit('chat message', message);
	});
});

http.listen(8080, function(){
	console.log('app listening on port 8080');
});