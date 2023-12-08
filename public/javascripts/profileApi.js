const $ = id => document.getElementById(id);
const baseURL = 'https://apis.datos.gob.ar/georef/api';

window.onload = async function(e){
    try {
        const response = await fetch(`${baseURL}/provincias`)
        const result = await response.json();

        result.provincias.sort((a,b) => a.nombre > b.nombre ? 1 : a.nombre < b.nombre ? -1 : 0).forEach(({nombre}) => {
            $('province').innerHTML += `<option value="${nombre}">${nombre}</option>`

        });

    } catch (error) {
        console.error(error)
    }

    $('province').addEventListener('change', async function(e){
        $('location').disabled = true
        try {

            const response = await fetch(`${baseURL}/localidades?provincia=${this.value}&max=1000`);
            const result = await response.json();

            if(result){
                $('location').disabled = false

                $('location').innerHTML = `<option value="">Seleccione...</option>`

                result.localidades.sort((a,b) => a.nombre > b.nombre ? 1 : a.nombre < b.nombre ? -1 : 0).forEach(({nombre}) => {
                    $('location').innerHTML += `<option value="${nombre}">${nombre}</option>`
        
                });
            }

            

        } catch (error) {
            console.error(error)
        }
    })
    
}
