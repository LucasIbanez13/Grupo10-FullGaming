
const $ = id => document.getElementById(id);

window.onload = function() {
 /* Category */   
    $('category').addEventListener('focus', function(e){
        $('msgError-category').innerHTML = null
        this.classList.remove('is-invalid')
        this.classList.remove('is-valid')
    })

    $('category').addEventListener('blur', function(e){

        switch (true) {
            case !this.value.trim():
                $('msgError-category').innerHTML = "La categoria es obligatoria"
                this.classList.add('is-invalid')
                break;
            default:
                $('msgError-category').innerHTML = null;
                this.classList.add('is-valid')
                this.classList.remove('is-invalid')
                break;
        }
    });

/* image */
$('image').addEventListener('focus', function(e){
    $('msgError-image').innerHTML = null
    this.classList.remove('is-invalid')
    this.classList.remove('is-valid')
})

$('image').addEventListener('blur', function(e){

    switch (true) {
        case !this.value.trim():
            $('msgError-image').innerHTML = "La imagen es obligatoria"
            this.classList.add('is-invalid')
            break;
        default:
            $('msgError-image').innerHTML = null;
            this.classList.add('is-valid')
            this.classList.remove('is-invalid')
            break;
    }
});
/* name */
$('name').addEventListener('focus', function(e){
    $('msgError-name').innerHTML = null
    this.classList.remove('is-invalid')
    this.classList.remove('is-valid')
})

$('name').addEventListener('blur', function(e){

    switch (true) {
        case !this.value.trim():
            $('msgError-name').innerHTML = "El nombre es obligatorio"
            this.classList.add('is-invalid')
            break;
        case this.value.trim().length < 2:
            $('msgError-name').innerHTML = "Mínimo dos letras";
            this.classList.add('is-invalid')
            break
        default:
            $('msgError-name').innerHTML = null;
            this.classList.add('is-valid')
            this.classList.remove('is-invalid')
            break;
    }
});
/*brand */
$('brand').addEventListener('focus', function(e){
    $('msgError-brand').innerHTML = null
    this.classList.remove('is-invalid')
    this.classList.remove('is-valid')
})

$('brand').addEventListener('blur', function(e){

    switch (true) {
        case !this.value.trim():
            $('msgError-brand').innerHTML = "La marca es obligatorio"
            this.classList.add('is-invalid')
            break;
        default:
            $('msgError-brand').innerHTML = null;
            this.classList.add('is-valid')
            this.classList.remove('is-invalid')
            break;
    }
});
/* model */
$('model').addEventListener('focus', function(e){
    $('msgError-model').innerHTML = null
    this.classList.remove('is-invalid')
    this.classList.remove('is-valid')
})

$('model').addEventListener('blur', function(e){

    switch (true) {
        case !this.value.trim():
            $('msgError-model').innerHTML = "El nombre es obligatorio"
            this.classList.add('is-invalid')
            break;
        case this.value.trim().length < 3:
            $('msgError-model').innerHTML = "Mínimo tres letras";
            this.classList.add('is-invalid')
            break
        default:
            $('msgError-model').innerHTML = null;
            this.classList.add('is-valid')
            this.classList.remove('is-invalid')
            break;
    }
});
/* stock */
$('stock').addEventListener('focus', function(e){
    $('msgError-stock').innerHTML = null
    this.classList.remove('is-invalid')
    this.classList.remove('is-valid')
})

$('stock').addEventListener('blur', function(e){

    switch (true) {
        case !this.value.trim():
            $('msgError-stock').innerHTML = "El nombre es obligatorio"
            this.classList.add('is-invalid')
            break;
        case this.value.trim().length < 2:
            $('msgError-stock').innerHTML = "Mínimo dos letras";
            this.classList.add('is-invalid')
            break
        case !/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(this.value.trim()):
            $('msgError-stock').innerHTML = "Solo se permiten letras";
            this.classList.add('is-invalid')
            break
        default:
            $('msgError-stock').innerHTML = null;
            this.classList.add('is-valid')
            this.classList.remove('is-invalid')
            break;
    }
});
/* description */
$('description').addEventListener('focus', function(e){
    $('msgError-description').innerHTML = null
    this.classList.remove('is-invalid')
    this.classList.remove('is-valid')
})

$('description').addEventListener('blur', function(e){

    switch (true) {
        case !this.value.trim():
            $('msgError-description').innerHTML = "La descripcion es obligatorio"
            this.classList.add('is-invalid')
            break;
        case this.value.trim().length < 10:
            $('msgError-description').innerHTML = "Mínimo diez letras";
            this.classList.add('is-invalid')
            break
        case this.value.trim().length > 250:
            $('msgError-description').innerHTML = "maximo 250 letras";
            this.classList.add('is-invalid')
             break
        default:
            $('msgError-description').innerHTML = null;
            this.classList.add('is-valid')
            this.classList.remove('is-invalid')
            break;
    }
});
/* price */
$('price').addEventListener('focus', function(e){
    $('msgError-price').innerHTML = null
    this.classList.remove('is-invalid')
    this.classList.remove('is-valid')
})

$('price').addEventListener('blur', function(e){

    switch (true) {
        case !this.value.trim():
            $('msgError-price').innerHTML = "El precio es obligatorio"
            this.classList.add('is-invalid')
            break;
        case !/^\d+$/.test(this.value.trim()):
            $('msgError-price').innerHTML = "Solo se permiten números enteros";
            this.classList.add('is-invalid');
            break;
        default:
            $('msgError-price').innerHTML = null;
            this.classList.add('is-valid')
            this.classList.remove('is-invalid')
            break;
    }
});
}