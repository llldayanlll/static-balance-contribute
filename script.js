// script.js
const homePage = document.getElementById('home');
const loginBtn = document.getElementById('login-btn');
const availabilityBtn = document.getElementById('availability-btn');

// Log in
loginBtn.addEventListener('click', () => {
    const username = prompt('Enter username:');
    const password = prompt('Enter password:');
    // For simplicity, assume any input is valid
    // Show availability button and alert
    availabilityBtn.style.display = 'block';
    alert('Log in successful!');
});

// Mark availability
availabilityBtn.addEventListener('click', () => {
    // For simplicity, just display a message
    alert('Availability marked.');
});
