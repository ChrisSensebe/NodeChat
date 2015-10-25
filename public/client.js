var socket = io();
var pseudo;

$('#formPseudo').submit(function(){
	pseudo = $('#pseudo').val();
	$('#formMessage').show();
	$('#formPseudo').hide();
	return false;
});

$('#formMessage').submit(function(){
	socket.emit('chat message', [pseudo,$('#message').val()]);
	$('#message').val('');
	return false;
});

socket.on('chat message', function(message){
	$('#messages').append($('<li>').text(message[0] + ' : ' + message[1]))
});