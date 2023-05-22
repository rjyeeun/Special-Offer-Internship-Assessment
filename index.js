const background = document.getElementById('background');
const form = document.getElementById('myForm');
const emailInput = document.querySelector('.email');
const submitButton = document.querySelector('.submitButton');

// Function to prevent default form submission behavior
form.addEventListener('submit', function(event) {
    event.preventDefault();
    // Validate email address
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
        // Hide background and display success message
        background.style.backgroundImage ='none';
        background.style.backgroundColor = 'pink';
        displaySuccessMessage();
    } else {
        alert('Please enter a valid email address.');
    }
});

// Function to display success message
function displaySuccessMessage() {
    background.innerHTML = '';

    const successMessage = document.createElement('h2');
    successMessage.textContent = 'Thank you for the information! You will receive exciting updates and offers from SPECIAL OFFER.';
    background.appendChild(successMessage);
}
