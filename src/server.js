import express from 'express';

const app = express();
const port = 4000;

//create a websocket server
//the server will listen on the same port as the express server
//after connection, the server will send a message to the client
//both the server and the client should be able to send messages to each other
const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.emit('message', 'Hello from the server');
  socket.on('message', (msg) => {
    console.log('message: ' + msg);
  });
});

server.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
}
);

