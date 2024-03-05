const form = document.getElementById('registrationForm');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default submission

  // Validation
  let isValid = true; // Start with the assumption that the form is valid

  if (usernameInput.value.length < 3) {
    alert('Username must be at least 3 characters long.');
    isValid = false;
  }

  // Basic email validation pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value)) {
    alert('Please enter a valid email address.');
    isValid = false;
  }

  if (passwordInput.value.length < 6) {
    alert('Password must be at least 6 characters long.');
    isValid = false;
  }

  // Submit form if valid
  if (isValid) {
    alert('Form submitted successfully!'); 
    // Optionally, submit the form to a server using an AJAX request 
  }
});
const form = document.getElementById('registrationForm');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    // Get input values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Basic validation would go here (username length, email format, etc.)
    // Example:
    if (username.length < 3) {
        alert('Username must be at least 3 characters long.');
        return; 
    }

    // More advanced validation logic would be added ...

    // If validation passes:
    alert('Form submitted successfully!'); 
    // Optionally, submit the form to a server for further processing
});