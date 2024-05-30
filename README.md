# JavaScript
code Repo for JS Tutorial


document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.querySelector('#email');

    emailInput.addEventListener('change', function() {
        const emailValue = emailInput.value.trim();

        if (emailValue === '') {
            // If email field is empty, show an error message or visual feedback
            // For example:
            // document.querySelector('#emailError').textContent = 'Email is required';
            // or add a CSS class to indicate the error: emailInput.classList.add('error');
        } else {
            // Perform additional validation checks if needed
            if (!validateEmailFormat(emailValue)) {
                // If email format is invalid, show an error message or visual feedback
                // For example:
                // document.querySelector('#emailError').textContent = 'Invalid email format';
                // or add a CSS class to indicate the error: emailInput.classList.add('error');
            } else {
                // Clear any error messages or visual feedback if email is valid
                // For example:
                // document.querySelector('#emailError').textContent = '';
                // emailInput.classList.remove('error');
            }
        }
    });

    // Validate email format
    function validateEmailFormat(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});