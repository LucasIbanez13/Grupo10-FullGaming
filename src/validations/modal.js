document.addEventListener("DOMContentLoaded", function() {
    const closeModalButton = document.querySelector("#closeModal");
    const errorMessages = document.querySelectorAll(".error-message");
  
    closeModalButton.addEventListener("click", function() {
      // Oculta los mensajes de error
      errorMessages.forEach(function(errorMessage) {
        errorMessage.style.display = "none";
      });
    });
  });