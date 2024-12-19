// Sidebar toggle functionality
const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggleBtn');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
});

// Show individual content sections dynamically
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    const selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';

    // Update active state in sidebar
    const items = document.querySelectorAll('.sidebar li');
    items.forEach(item => {
        item.classList.remove('active');
    });
    event.currentTarget.classList.add('active');

    // Map section IDs to their respective HTML files
    const sectionFiles = {
        dashboard: 'dash.html',
        findInfluencers: 'FindInfluencers.html',
        list: 'List.html',
        orders: 'Orders.html',
        campaigns: 'Campaigns.html'
    };

    // Fetch and load content dynamically
    if (sectionFiles[sectionId]) {
        fetch(sectionFiles[sectionId])
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to load ${sectionFiles[sectionId]}`);
                }
                return response.text();
            })
            .then(htmlContent => {
                selectedSection.innerHTML = htmlContent;
            })
            .catch(error => {
                selectedSection.innerHTML = `<p>Error loading content: ${error.message}</p>`;
            });
    }
}
