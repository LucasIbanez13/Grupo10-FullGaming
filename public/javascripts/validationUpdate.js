window.onload = function () {
    const $ = id => document.getElementById(id);

    $('btn-submit').addEventListener('click', function (e) {
        e.preventDefault();

        validateName();
        /* validateBrand(); */
        validateModel();
        validateDescription();
    });

    function validateName() {
        const campoNombre = $('name');
        const nameError = $('msg-error-name');

        switch (true) {
            case !campoNombre.value.trim():
                nameError.innerHTML = "El nombre es obligatorio";
                campoNombre.classList.add('is-invalid');
                break;
            case campoNombre.value.trim().length < 5:
                nameError.innerHTML = "Mínimo cinco letras";
                campoNombre.classList.add('is-invalid');
                break;
            default:
                nameError.innerHTML = null;
                campoNombre.classList.add('is-valid');
                campoNombre.classList.remove('is-invalid');
                break;
        }
    }

    /* function validateBrand() {
        const campoBrand = $('brand');
        const brandError = $('msg-error-brand');

        switch (true) {
            case !campoBrand.value.trim():
                brandError.innerHTML = "La marca es obligatoria";
                campoBrand.classList.add('is-invalid');
                break;
            default:
                brandError.innerHTML = null;
                campoBrand.classList.add('is-valid');
                campoBrand.classList.remove('is-invalid');
                break;
        } */
    }

    function validateModel() {
        const campoModel = $('model');
        const modelError = $('msg-error-model');

        switch (true) {
            case !campoModel.value.trim():
                modelError.innerHTML = "El modelo es obligatorio";
                campoModel.classList.add('is-invalid');
                break;
            case campoModel.value.trim().length < 3:
                modelError.innerHTML = "Mínimo tres letras";
                campoModel.classList.add('is-invalid');
                break;
            default:
                modelError.innerHTML = null;
                campoModel.classList.add('is-valid');
                campoModel.classList.remove('is-invalid');
                break;
        }
    }

    function validateDescription() {
        const descriptionInput = $('description');
        const errorContainer = $('msg-error-description');

        switch (true) {
            case !descriptionInput.value.trim():
                errorContainer.innerHTML = "La descripción es obligatoria";
                descriptionInput.classList.add('is-invalid');
                break;
            case descriptionInput.value.trim().length < 20:
                errorContainer.innerHTML = "Mínimo 20 caracteres";
                descriptionInput.classList.add('is-invalid');
                break;
            default:
                errorContainer.innerHTML = null;
                descriptionInput.classList.add('is-valid');
                descriptionInput.classList.remove('is-invalid');
                break;
        }
    }
;