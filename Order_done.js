// Order_done.js

function OrderDoneInit() {
    const startOrderBtn = document.getElementById('startOrderBtn');
    const startedOrderMsg = document.getElementById('startedOrderMsg');
    const modalOverlay = document.getElementById('modalOverlay');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const submitBtn = document.getElementById('submitBtn');
    const submittedOrderMsg = document.getElementById('submittedOrderMsg');
    const messageInputArea = document.querySelector('.order-message-input-area');

    if (startOrderBtn) {
        startOrderBtn.addEventListener('click', function() {
            startedOrderMsg.classList.remove('order-hidden');
            this.style.display = 'none';

            const completeBtn = document.createElement('button');
            completeBtn.textContent = 'Complete & Submit Order';
            completeBtn.className = 'complete-btn';
            this.parentNode.appendChild(completeBtn);

            completeBtn.addEventListener('click', function() {
                modalOverlay.style.display = 'flex';
            });
        });
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', function() {
            modalOverlay.style.display = 'none';
        });
    }

    if (submitBtn) {
        submitBtn.addEventListener('click', function() {
            modalOverlay.style.display = 'none';
            submittedOrderMsg.classList.remove('order-hidden');
            updateMessageInputBackground(true); // Update background when order is submitted
            const orderMeta = document.querySelector('.order-meta');
            orderMeta.classList.add('submitted');
            orderMeta.innerHTML = `<span class="submitted-msg">You have submitted the order. Check pending orders</span>`;
        });
    }

    // Function to update the message input area background based on order submission status
    function updateMessageInputBackground(isSubmitted) {
        if (isSubmitted) {
            messageInputArea.style.backgroundColor = '#f4f4f9'; // Lighter background color
        } else {
            messageInputArea.style.backgroundColor = '#ddd'; // Default background color
        }
    }
}

document.addEventListener('DOMContentLoaded', OrderDoneInit);
