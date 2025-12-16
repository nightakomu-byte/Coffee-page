document.addEventListener('DOMContentLoaded', () => {
    // Get the menu button and the navigation bar elements
    let menu = document.querySelector('#menu-btn');
    let navbar = document.querySelector('.navbar');

    // Add a click event listener to the menu button
    menu.onclick = () => {
        // Toggle the 'active' class on both the menu icon and the navbar
        // This is controlled by the CSS media queries
        menu.classList.toggle('fa-times'); // Assuming you use a font-awesome 'fas fa-bars' icon
        navbar.classList.toggle('active');
    };

    // Remove the 'active' class on scroll to close the menu if it's open
    window.onscroll = () => {
        menu.classList.remove('fa-times');
        navbar.classList.remove('active');
    };
});