// Dashboard_2.js

const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggleBtn');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    const selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';

    const items = document.querySelectorAll('.sidebar li');
    items.forEach(item => {
        item.classList.remove('active');
    });
    event.currentTarget.classList.add('active');

    loadSectionContent(sectionId);
}

function loadSectionContent(sectionId) {
    const sectionFiles = {
        dashboard: 'dash.html',
        findInfluencers: 'FindInfluencers.html',
        list: 'List.html',
        orders: 'Orders.html',
        campaigns: 'Campaigns.html',
        manage_order: 'order_done.html',
        Earning: 'see_orders.html'
    };

    if (sectionFiles[sectionId]) {
        fetch(sectionFiles[sectionId])
            .then(response => response.text())
            .then(htmlContent => {
                document.getElementById(sectionId).innerHTML = htmlContent;
                if (sectionId === 'manage_order') {
                    // Reinitialize Order Done scripts
                    OrderDoneInit();
                }
            })
            .catch(error => console.error('Failed to load section content:', error));
    }
}
