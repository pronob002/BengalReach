const messagesDiv = document.getElementById('messages');
const messageInput = document.getElementById('messageInput');

function sendMessage() {
    const messageText = messageInput.value.trim();
    if (messageText === '') return;

    // Create and display the user's message
    const userMessage = createMessage(messageText, 'user');
    messagesDiv.appendChild(userMessage);

    // Scroll to the bottom
    messagesDiv.scrollTop = messagesDiv.scrollHeight;

    // Clear input
    messageInput.value = '';

    // Simulate a response
    setTimeout(() => {
        const botMessage = createMessage('Thank you for your message!', 'bot');
        messagesDiv.appendChild(botMessage);
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }, 1000);
}

function createMessage(text, type) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    if (type === 'user') {
        messageDiv.classList.add('user');
    }

    const avatarDiv = document.createElement('div');
    avatarDiv.classList.add('avatar');

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('message-content');
    const textParagraph = document.createElement('p');
    textParagraph.textContent = text;
    contentDiv.appendChild(textParagraph);

    messageDiv.appendChild(avatarDiv);
    messageDiv.appendChild(contentDiv);

    return messageDiv;
}
