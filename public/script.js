document.addEventListener('DOMContentLoaded', function() {
  const socket = io('https://global-chat-jp3k.onrender.com');

  const chatForm = document.getElementById('chatForm');
  const messageInput = document.getElementById('messageInput');
  const messages = document.getElementById('messages');

  if (chatForm && messageInput && messages) {
    chatForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const message = messageInput.value;
      socket.emit('chat message', message);
      messageInput.value = '';
    });

    socket.on('chat message', (msg) => {
      const item = document.createElement('li');
      item.textContent = msg;
      messages.appendChild(item);
    });
  } else {
    console.error("One or more elements (chatForm, messageInput, messages) are missing in the DOM.");
  }
});
