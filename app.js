// Dependences
var app  = require('express')(),
	http = require('http').Server(app),
	io   = require('socket.io')(http);

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	console.log('nouvelle connection');
});

http.listen(8080, function(){
	console.log('app listening on port 8080');
});