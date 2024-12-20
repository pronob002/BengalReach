// Transaction
const transactions = [
    {
      datetime: "Feb 21, 2023 at 03:05 pm",
      paymentMethod: "Bkash",
      account: "*******7123",
      order: "Axxc456as",
      amount: "$8.58"
    },
    {
      datetime: "Feb 21, 2023 at 03:05 pm",
      paymentMethod: "Dutch Bangla Bank",
      account: "*******6578",
      order: "Axxc456as",
      amount: "$2.00"
    },
    {
      datetime: "Mar 13, 2023 at 08:05 am",
      paymentMethod: "Bkash",
      account: "*******7123",
      order: "Axxc456as",
      amount: "$9.23"
    },
    {
      datetime: "Aug 18, 2023 at 04:12 pm",
      paymentMethod: "Bkash",
      account: "*******7123",
      order: "Axxc456as",
      amount: "$6.26"
    },
    {
      datetime: "Jan 1, 2023 at 01:49 pm",
      paymentMethod: "Bkash",
      account: "*******7123",
      order: "Axxc456as",
      amount: "$5.44"
    },
    {
      datetime: "Aug 3, 2023 at 12:10 am",
      paymentMethod: "City Bank Limited",
      account: "*******2449",
      order: "Axxc456as",
      amount: "$3.08"
    },
    {
        datetime: "Aug 3, 2023 at 12:10 am",
        paymentMethod: "City Bank Limited",
        account: "*******2449",
        order: "Axxc456as",
        amount: "$3.08"
      },
      {
        datetime: "Aug 3, 2023 at 12:10 am",
        paymentMethod: "City Bank Limited",
        account: "*******2449",
        order: "Axxc456as",
        amount: "$3.08"
      },
      {
        datetime: "Aug 3, 2023 at 12:10 am",
        paymentMethod: "City Bank Limited",
        account: "*******2449",
        order: "Axxc456as",
        amount: "$3.08"
      }
  ];
  
  const transactionsBody = document.getElementById('transactions-body');
  
  transactions.forEach(tx => {
    const tr = document.createElement('tr');
  
    const tdDate = document.createElement('td');
    tdDate.textContent = tx.datetime;
    tdDate.setAttribute('data-label', 'Date and time');
  
    const tdMethod = document.createElement('td');
    tdMethod.textContent = tx.paymentMethod;
    tdMethod.setAttribute('data-label', 'Payment method');
  
    const tdAccount = document.createElement('td');
    tdAccount.textContent = tx.account;
    tdAccount.setAttribute('data-label', 'Account');
  
    const tdOrder = document.createElement('td');
    tdOrder.textContent = tx.order;
    tdOrder.setAttribute('data-label', 'Order');
  
    const tdAmount = document.createElement('td');
    tdAmount.textContent = tx.amount;
    tdAmount.classList.add('amount');
    tdAmount.setAttribute('data-label', 'Amount');
  
    const tdActions = document.createElement('td');
    tdActions.setAttribute('data-label', 'Actions');
    const actionIcon = document.createElement('span');
    actionIcon.classList.add('action-icon');
    tdActions.appendChild(actionIcon);
  
    tr.appendChild(tdDate);
    tr.appendChild(tdMethod);
    tr.appendChild(tdAccount);
    tr.appendChild(tdOrder);
    tr.appendChild(tdAmount);
    tr.appendChild(tdActions);
  
    transactionsBody.appendChild(tr);
  });
  
  // Optional: Add an event listener for the filter button if needed
  document.querySelector('.filter-btn').addEventListener('click', () => {
    alert('Filter functionality not implemented. Replace this with your filter logic.');
  });
  