window.addEventListener('load', function(){
    let formulario = document.querySelector(".register"); 
    formulario.addEventListener("submit", function(e){

        // Vaciar los mensajes de error existentes
        let ulErrores = document.querySelector("div.errores ul");
        ulErrores.innerHTML = "";

        let errores = [];

        let formName = document.querySelector('#formName');
        
        if (formName.value == "") {
            errores.push("El campo de nombre no puede estar vacío");
        } else if (formName.value.length < 3) {
            errores.push("el nombre tiene que tener al menos  3 caracteres");
        }

        let formEmail = document.querySelector('#formEmail');
        
        if (formEmail.value == "") {
            errores.push("El campo de email no puede estar vacío");
        }

        let formPass = document.querySelector('#formPass');
        
        if (formPass.value == "") {
            errores.push("El campo de Pass no puede estar vacío");
        }

        let formPass2 = document.querySelector('#formPass2');
        
        if (formPass2.value != formPass.value) {
            errores.push("El campo no puede ser distinto");
        }

        if (errores.length > 0) {
            e.preventDefault();
        }

        for (let i = 0; i < errores.length; i++) {
            ulErrores.innerHTML += "<li>" + errores[i] + "</li>";
        }

    });
});