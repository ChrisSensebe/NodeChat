// Dependences
var app  = require('express')(),
	http = require('http').Server(app);

app.get('/', function(req, res){
	res.send('<h2>Node chat</h2>');
});

http.listen(8080, function(){
	console.log('app listening on port 8080');
});