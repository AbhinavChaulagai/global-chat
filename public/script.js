const socket = io('https://global-chat-jp3k.onrender.com');

document.getElementById('chatForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const message = document.getElementById('messageInput').value;
  socket.emit('chat message', message);
  document.getElementById('messageInput').value = '';
});

socket.on('chat message', (msg) => {
  const item = document.createElement('li');
  item.textContent = msg;
  document.getElementById('messages').appendChild(item);
});
