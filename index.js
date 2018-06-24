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
<<<<<<< Updated upstream
    socket.on('new-connection', function(msg){
        console.log('new connection:' + msg);
        io.emit('new-connection', msg); 
=======
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
    socket.on('new-call', function(msg){
        console.log('new call')
        io.emit('new-call', msg);
>>>>>>> Stashed changes
    });
});

server.listen(3000, function(){
    console.log('listening on *:3000');
});
