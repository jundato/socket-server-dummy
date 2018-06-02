var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
    socket.on('client_sendMessage', function(msg){
        io.emit('client_sendMessage', msg);
    });
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});