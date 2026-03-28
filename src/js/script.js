const emailInput = document.querySelector('#email');

const emailButton = document.querySelector('#submit-email-btn');

emailButton.addEventListener("click", () => {

    if (!validateEmail(emailInput.value)) {

        showErrorMensage();

        showInvalidIcon();

    } 

});

function validateEmail(email) {

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(email);

}

function showErrorMensage() {

    const invalidMsg = document.querySelector('#msg-erro');

    invalidMsg.style.display = "block";

}

function showInvalidIcon() {

    const invalidIcon = document.querySelector('.invalid-icon');

    invalidIcon.style.display = "block"

}