console.log("El archivo validation.js se ha cargado correctamente.");
document.addEventListener("DOMContentLoaded", function() {
    const registerForm = document.querySelector("form");
    const nameInput = document.querySelector("input[name='name']");
    const emailInput = document.querySelector("input[name='email']");
    const passInput = document.querySelector("input[name='pass']");
    const passzInput = document.querySelector("input[name='passz']");
    const errorMessages = Array.from(document.querySelectorAll(".error-message"));

    registerForm.addEventListener("submit", function(event) {
        let isValid = true;

        
        if (nameInput.value.trim() === "") {
            errorMessages[0].textContent = "Por favor, ingrese un nombre.";
            isValid = false;
        }

        
        if (emailInput.value.trim() === "") {
            errorMessages[1].textContent = "Por favor, ingrese un correo electrónico.";
            isValid = false;
        }

        
        if (passInput.value.trim() === "") {
            errorMessages[2].textContent = "Por favor, ingrese una contraseña.";
            isValid = false;
        }

        
        if (passzInput.value.trim() === "" || passzInput.value !== passInput.value) {
            errorMessages[3].textContent = "Las contraseñas no coinciden.";
            isValid = false;
        }

        
        if (!isValid) {
            event.preventDefault();
        }
    });
});