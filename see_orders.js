const earningsHistoryData = [
  {
      datetime: "12th may, 2024 ; 02:34 am",
      platform: "Instagram",
      account: "@abdunnur156",
      orderId: "AX564UX89",
      earnings: "$10000000",
      client: "Symon Tarly",
      actions: "👁️"
  },
  {
      datetime: "12th may, 2024 ; 02:34 am",
      platform: "Instagram",
      account: "@abdunnur156",
      orderId: "AX564UX89",
      earnings: "$10000000",
      client: "Symon Tarly",
      actions: "👁️"
  },
  {
      datetime: "12th may, 2024 ; 02:34 am",
      platform: "Instagram",
      account: "@abdunnur156",
      orderId: "AX564UX89",
      earnings: "$10000000",
      client: "Symon Tarly",
      actions: "👁️"
  },
  {
      datetime: "12th may, 2024 ; 02:34 am",
      platform: "Instagram",
      account: "@abdunnur156",
      orderId: "AX564UX89",
      earnings: "$10000000",
      client: "Symon Tarly",
      actions: "👁️"
  },
  {
      datetime: "12th may, 2024 ; 02:34 am",
      platform: "Instagram",
      account: "@abdunnur156",
      orderId: "AX564UX89",
      earnings: "$10000000",
      client: "Symon Tarly",
      actions: "👁️"
  },
  {
      datetime: "12th may, 2024 ; 02:34 am",
      platform: "Instagram",
      account: "@abdunnur156",
      orderId: "AX564UX89",
      earnings: "$10000000",
      client: "Symon Tarly",
      actions: "👁️"
  }
];

// Populate the table with dummy data
const earningsHistoryTableBody = document.getElementById('earnings-history-body');
earningsHistoryData.forEach(entry => {
  const row = document.createElement('tr');

  const datetimeCell = document.createElement('td');
  datetimeCell.textContent = entry.datetime;
  row.appendChild(datetimeCell);

  const platformCell = document.createElement('td');
  platformCell.textContent = entry.platform;
  row.appendChild(platformCell);

  const accountCell = document.createElement('td');
  accountCell.textContent = entry.account;
  row.appendChild(accountCell);

  const orderIdCell = document.createElement('td');
  orderIdCell.textContent = entry.orderId;
  row.appendChild(orderIdCell);

  const earningsCell = document.createElement('td');
  earningsCell.textContent = entry.earnings;
  row.appendChild(earningsCell);

  const clientCell = document.createElement('td');
  clientCell.textContent = entry.client;
  row.appendChild(clientCell);

  const actionsCell = document.createElement('td');
  actionsCell.textContent = entry.actions;
  row.appendChild(actionsCell);

  earningsHistoryTableBody.appendChild(row);
});

// Chart.js Setup
const earningsChartCtx = document.getElementById('earningsChartCanvas').getContext('2d');

// Dummy monthly earnings data
const monthlyEarningsData = {
  labels: ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan'24", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  data: [50, 100, 120, 150, 300, 400, 350, 200, 50, 400, 556, 300]
};

new Chart(earningsChartCtx, {
  type: 'line',
  data: {
      labels: monthlyEarningsData.labels,
      datasets: [{
          label: 'Earnings',
          data: monthlyEarningsData.data,
          fill: true,
          borderColor: '#4b2267',
          backgroundColor: 'rgba(75,34,103,0.1)',
          pointBackgroundColor: '#4b2267',
          pointBorderColor: '#4b2267',
          pointRadius: 4,
          tension: 0.3
      }]
  },
  options: {
      responsive: true,
      plugins: {
          tooltip: {
              callbacks: {
                  label: function(context) {
                      return '$' + context.parsed.y;
                  }
              }
          }
      },
      scales: {
          x: {
              grid: {
                  display: true,
                  color: "#eee"
              }
          },
          y: {
              beginAtZero: true,
              grid: {
                  display: true,
                  color: "#eee"
              },
              ticks: {
                  callback: function(value) {
                      return '$' + value;
                  }
              }
          }
      },
      hover: {
          mode: 'index',
          intersect: false
      }
  }
});
