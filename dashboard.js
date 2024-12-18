// Toggle Sidebar Collapse
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('collapsed');
}

// Show Selected Page
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    const menuItems = document.querySelectorAll('.menu li');

    pages.forEach(page => {
        page.classList.remove('active');
    });

    menuItems.forEach(item => {
        item.classList.remove('active');
    });

    document.getElementById(pageId).classList.add('active');
    event.currentTarget.classList.add('active');
}
