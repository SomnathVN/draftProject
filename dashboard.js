// Toggle sidebar visibility for smaller screens
const toggleSidebarButton = document.getElementById('toggleSidebar');
const sidebar = document.querySelector('.sidebar');

toggleSidebarButton.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
});
