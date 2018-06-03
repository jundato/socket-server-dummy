var app = require('express')();
var cors = require('cors');
var server = require('http').Server(app);
var io = require('socket.io')(server, { origins: '*:*'});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('new-connection', function(){
        console.log('new connection');
    });
});

server.listen(3000, function(){
    console.log('listening on *:3000');
});
