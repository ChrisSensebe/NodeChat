/*
/	se connecte au serveur grace a socket.io
*/
var socket = io();
/*
/	variable servant a stocker le pseudo
*/
var pseudo;
/*
/	A la soumission du pseudo:
/	le stocke dans pseudo
/	le transmet au serveur
/	cache le formulaire de soumission du pseudo et affiche celui des messages
*/
$('#formPseudo').submit(function(){
	pseudo = $('#pseudo').val();
	socket.emit('new client', pseudo);
	$('#formMessage').show();
	$('#formPseudo').hide();
	return false;
});
/*
/	transmet le message et son auteur au serveur
/	vide la zone de saisie
*/
$('#formMessage').submit(function(){
	socket.emit('chat message', {pseudo : pseudo, message : $('#message').val()});
	$('#message').val('');
	return false;
});
/*
/	affiche un message quand un nouveau client se connecte
*/
socket.on('new client', function(pseudo){
	$('#messages').prepend($('<li>').text('Serveur : ' + pseudo + ' viens de se connecter'));
});
/*
/	affiche les messages recus depuis le serveur
*/
socket.on('chat message', function(message){
	$('#messages').prepend($('<li>').text(message.pseudo + ' : ' + message.message))
});