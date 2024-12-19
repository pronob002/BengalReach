const menuBtn = document.getElementById('menuBtn');
const menuDropdown = document.getElementById('menuDropdown');
const chatItems = document.querySelectorAll('.chat-item');
const chatUserName = document.getElementById('chatUserName');
const rightSidebarName = document.getElementById('rightSidebarName');
const messagesArea = document.getElementById('messagesArea');

menuBtn.addEventListener('click', () => {
  menuDropdown.style.display = menuDropdown.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('#menuBtn') && !e.target.closest('#menuDropdown')) {
    menuDropdown.style.display = 'none';
  }
});

// Dummy conversations data
const conversations = {
  "Ralph Edwards": `
    <div class="message received">
      <div class="message-wrapper">
        <div class="avatar">👦</div>
        <div class="message-content">
          <div class="replied-box">
            <span class="replied-label">Replied to</span>
            <p class="replied-text">This design i produced 2 month ago.</p>
          </div>
          <p>Hi! I’ve completed the design for your landing page. Please check it out and let me know if any revisions are needed.</p>
          <span class="msg-time">04:54 PM</span>
        </div>
      </div>
    </div>

    <div class="message sent">
      <div class="message-wrapper">
        <div class="message-content">
          <p>I am right now doing the revisions</p>
          <span class="msg-time">04:54 PM</span>
        </div>
        <div class="avatar">🧑</div>
      </div>
    </div>

    <div class="message received attachment-msg">
      <div class="message-wrapper">
        <div class="avatar">👦</div>
        <div class="message-content">
          <p>Here’s the banner design for the campaign:</p>
          <h4>ATTACHMENTS</h4>
          <div class="attachment-gallery">
            <div class="attachment-item">
              <div class="attachment-preview">🖼️</div>
              <div class="attachment-info">
                <span>Design Banner 1.png</span>
                <button class="download-btn">⬇</button>
              </div>
            </div>
            <div class="attachment-item">
              <div class="attachment-preview">🖼️</div>
              <div class="attachment-info">
                <span>Design Banner 1.png</span>
                <button class="download-btn">⬇</button>
              </div>
            </div>
            <div class="attachment-item more-item">+4</div>
          </div>
          <span class="msg-time">04:54 PM</span>
        </div>
      </div>
    </div>
  `,
  "Jacob Jones": `
    <div class="message received">
      <div class="message-wrapper">
        <div class="avatar">🧑</div>
        <div class="message-content">
          <p>Hello Jacob! Thanks for reaching out.</p>
          <span class="msg-time">10:30 AM</span>
        </div>
      </div>
    </div>
    <div class="message sent">
      <div class="message-wrapper">
        <div class="message-content">
          <p>Hi Jacob, let me know what you need.</p>
          <span class="msg-time">10:35 AM</span>
        </div>
        <div class="avatar">🧑</div>
      </div>
    </div>
  `,
  "Wade Warren": `
    <div class="message received">
      <div class="message-wrapper">
        <div class="avatar">👱</div>
        <div class="message-content">
          <p>Hi Wade, I got your message and will reply shortly.</p>
          <span class="msg-time">09:00 AM</span>
        </div>
      </div>
    </div>
    <div class="message sent">
      <div class="message-wrapper">
        <div class="message-content">
          <p>Great, waiting for your input!</p>
          <span class="msg-time">09:05 AM</span>
        </div>
        <div class="avatar">🧑</div>
      </div>
    </div>
  `,
  "Ronald Richards": `
    <div class="message received">
      <div class="message-wrapper">
        <div class="avatar">👨</div>
        <div class="message-content">
          <p>Let's finalize the deal today!</p>
          <span class="msg-time">03:00 PM</span>
        </div>
      </div>
    </div>
    <div class="message sent">
      <div class="message-wrapper">
        <div class="message-content">
          <p>Sure, I am ready to proceed.</p>
          <span class="msg-time">03:10 PM</span>
        </div>
        <div class="avatar">🧑</div>
      </div>
    </div>
  `,
  "Arlene McCoy": `
    <div class="message received">
      <div class="message-wrapper">
        <div class="avatar">👩</div>
        <div class="message-content">
          <p>Hi Arlene, any updates on the project?</p>
          <span class="msg-time">11:45 AM</span>
        </div>
      </div>
    </div>
    <div class="message sent">
      <div class="message-wrapper">
        <div class="message-content">
          <p>Not yet, I'm still waiting for confirmation.</p>
          <span class="msg-time">11:50 AM</span>
        </div>
        <div class="avatar">🧑</div>
      </div>
    </div>
  `
};

// Switch chat on clicking sidebar chat item
chatItems.forEach(item => {
  item.addEventListener('click', () => {
    // Remove active from other items
    chatItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');

    const user = item.getAttribute('data-user');
    chatUserName.textContent = user;
    rightSidebarName.textContent = user;
    messagesArea.innerHTML = conversations[user] || '<p>No messages yet.</p>';
  });
});
