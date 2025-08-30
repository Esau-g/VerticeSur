document.addEventListener('DOMContentLoaded', function () {
const form = document.querySelector('.registration-form');
const submitButton = document.querySelector('.submit-button');

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

})