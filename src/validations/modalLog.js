document.addEventListener("DOMContentLoaded", function() {
    const closeModalButton = document.querySelector("#closeModalLog");
    const errorMessages = document.querySelectorAll("#form-login .error-message");
  
    closeModalButton.addEventListener("click", function() {
      // Ocultar los mensajes de error
      errorMessages.forEach(function(errorMessage) {
        errorMessage.style.display = "none";
      });
    });
  });