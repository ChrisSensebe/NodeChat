var socket = io();
var pseudo;

$('#formPseudo').submit(function(){
	pseudo = $('#pseudo').val();
	socket.emit('new client', pseudo);
	$('#formMessage').show();
	$('#formPseudo').hide();
	return false;
});

$('#formMessage').submit(function(){
	socket.emit('chat message', {pseudo : pseudo, message : $('#message').val()});
	$('#message').val('');
	return false;
});

socket.on('new client', function(pseudo){
	$('#messages').append($('<li>').text('Serveur : ' + pseudo + ' viens de se connecter'));
});

socket.on('chat message', function(message){
	$('#messages').append($('<li>').text(message.pseudo + ' : ' + message.message))
});