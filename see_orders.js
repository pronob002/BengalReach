// see_orders
const earningHistory = [
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
  const historyBody = document.getElementById('history-body');
  earningHistory.forEach(entry => {
    const row = document.createElement('tr');
  
    const datetime = document.createElement('td');
    datetime.textContent = entry.datetime;
    row.appendChild(datetime);
  
    const platform = document.createElement('td');
    platform.textContent = entry.platform;
    row.appendChild(platform);
  
    const account = document.createElement('td');
    account.textContent = entry.account;
    row.appendChild(account);
  
    const orderId = document.createElement('td');
    orderId.textContent = entry.orderId;
    row.appendChild(orderId);
  
    const earnings = document.createElement('td');
    earnings.textContent = entry.earnings;
    row.appendChild(earnings);
  
    const client = document.createElement('td');
    client.textContent = entry.client;
    row.appendChild(client);
  
    const actions = document.createElement('td');
    actions.textContent = entry.actions;
    row.appendChild(actions);
  
    historyBody.appendChild(row);
  });
  
  // Chart.js Setup
  const ctx = document.getElementById('earningsChart').getContext('2d');
  
  // Dummy monthly earnings data
  // Months: Aug, Sep, Oct, Nov, Dec, Jan'24, Feb, Mar, Apr, May, Jun, Jul
  const monthlyData = {
    labels: ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan'24", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    data: [50, 100, 120, 150, 300, 400, 350, 200, 50, 400, 556, 300]
  };
  
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: monthlyData.labels,
      datasets: [{
        label: 'Earnings',
        data: monthlyData.data,
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
  