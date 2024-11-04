const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*", // Allow all origins, you can specify your domains here for more control
    methods: ["GET", "POST"]
  }
});

const port = process.env.PORT || 10000;

app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('New user connected');
  
  // When a message is received from the client, broadcast it to all clients
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });

  // Log when a user disconnects
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
