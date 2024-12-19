// manage_order

const startOrderBtn = document.getElementById('startOrderBtn');
const startedOrderMsg = document.getElementById('startedOrderMsg');
const orderPrice = document.getElementById('orderPrice');

startOrderBtn.addEventListener('click', () => {
  // Show the "You have started the order" message
  startedOrderMsg.classList.remove('hidden');

  // Remove the start order button
  startOrderBtn.style.display = 'none';

  // Add "Complete & Submit Order" button next to the price
  const completeBtn = document.createElement('button');
  completeBtn.textContent = 'Complete & Submit Order';
  completeBtn.classList.add('complete-btn');

  const orderMeta = orderPrice.parentElement;
  orderMeta.appendChild(completeBtn);
});
