// Dependences
var app  = require('express')(),
	http = require('http').Server(app);

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

http.listen(8080, function(){
	console.log('app listening on port 8080');
});