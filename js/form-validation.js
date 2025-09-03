document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.registration-form');
    const submitButton = document.querySelector('.submit-button');

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validatePhone(phone) {
        const phoneRegex = /^[\+]?[0-9\s\-\(\)]{8,}$/;
        return phoneRegex.test(phone);
    }

    function validateRequired(value) {
        return value.trim() !== '';
    }

    function showError(field, message) {
        removeError(field);

        field.classList.add('error');

        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        field.parentNode.appendChild(errorDiv);
    }

    function removeError(field) {
        field.classList.remove('error');
        const existingError = field.parentNode.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
    }

    function validateField(field) {
        const value = field.value;
        const fieldName = field.name;

        if (field.hasAttribute('required') && !validateRequired(value)) {
            showError(field, 'Este campo es obligatorio');
            return false;
        }

        if (fieldName === 'email' && value && !validateEmail(value)) {
            showError(field, 'Por favor ingresa un email válido');
            return false;
        }

        if ((fieldName === 'phone' || fieldName === 'emergencyPhone') && value && !validatePhone(value)) {
            showError(field, 'Por favor ingresa un número de teléfono válido')
            return false;
        }

        removeError(field);
        return true;
    }

    const formFields = form.querySelectorAll('input, select, textarea');
    formFields.forEach(field => {
        field.addEventListener('blur', () => validateField(field));
        field.addEventListener('input', () => removeError(field));
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        let isValid = true;

        formFields.forEach(field => {
            if (!validateField(field)) {
                isValid = false
            }
        });

        if (isValid) {
            alert('¡Formulario enviado exitosamente!');
            form.reset();
        } else {
            alert('Por favor corrige los errores en el formulario');
        }
    })

})

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.registration-form')

    if (form) {
        form.addEventListener('submit', handleFormSubmission);
    }
});

function handleFormSubmission(event) {
    event.preventDefault();

    const formData = new FormData (event.target);

    const submitButton = event.target.querySelector('.submit-button');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Enviando...';
    submitButton.disabled = true;


    fetch ('../pages/submit-registration.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert ('¡Inscripción enviada exitosamente! Te contactaremos pronto.');
        } else {
            alert ('Error: ' + data.message);
        }
    })

    .catch (error => {
        console.error('Full error details:', error);
        console.error('Error message:', error.message);
        console.error('Error stack:', error.stack);
        alert ('Error al enviar el formulario. Por favor intenta de nuevo.');
    })

    .finally(() => {
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    })
}