// submit_order

const openModalBtn = document.getElementById('openModalBtn');
const modalOverlay = document.getElementById('modalOverlay');
const closeModalBtn = document.getElementById('closeModalBtn');
const attachmentsList = document.getElementById('attachmentsList');
const uploadArea = document.getElementById('uploadArea');
const submitBtn = document.getElementById('submitBtn');

// Open modal
openModalBtn.addEventListener('click', () => {
  modalOverlay.style.display = 'flex';
});

// Close modal
closeModalBtn.addEventListener('click', () => {
  modalOverlay.style.display = 'none';
});

// Remove attachment
attachmentsList.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-attachment')) {
    const attachmentItem = e.target.closest('.attachment-item');
    attachmentItem.remove();
  }
});

// Upload area click (for demonstration only)
uploadArea.addEventListener('click', () => {
  alert('Open file picker or handle drag & drop here.');
});

// Submit button action (for demonstration)
submitBtn.addEventListener('click', () => {
  alert('Form submitted!');
  modalOverlay.style.display = 'none';
});
