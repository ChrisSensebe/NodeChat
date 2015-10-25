/*
/	dependances
*/
var express = require('express'),
	http    = require('http'),
	socket  = require('socket.io');
/*
/	chargement de l'application du serveur et de socket.io
*/
var app    = express()
var server = http.Server(app);
var io     = socket(http);
/*
/	sert les fichiers statiques (client.js et style.css)
/	depuis le repertoire public/
*/
app.use(express.static('public'));
/*
/	sert index.html lors d'une requete get à la racine du serveur
*/
app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});
/*
/	creation d'un socket lors d'une connection
*/
io.on('connection', function(socket){
	console.log('nouvelle connection');
	// gestion de l'evenement deconnection
	socket.on('disconnect', function(socket){
		console.log('utilisateur deconnecté');
	});
	// emission du pseudo a tout les clients a l'evenement 'new client'
	socket.on('new client', function(pseudo){
		console.log('Nouvel utilisateur: ' + pseudo);
		io.emit('new client', pseudo);
	});
	// emission du message lors de l'evenement 'chat message'
	socket.on('chat message', function(message){
		console.log(message.pseudo + ': ' + message.message);
		io.emit('chat message', message);
	});
});
/*
/	demarre le serveur sur le port 8080
*/
server.listen(8080, function(){
	console.log('app listening on port 8080');
});