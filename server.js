const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
app.use(cors({ origin: 'https://abhinavchaulagai.github.io' }));
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const port = process.env.PORT || 10000;  // Use PORT environment variable if available

app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('New user connected');
  
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
