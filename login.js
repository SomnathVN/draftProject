// Wait for the page to load and then add the event listener to the login form
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        // Redirect to dashboard.html after successful "login"
        window.location.href = "dashboard.html";
    });
});
