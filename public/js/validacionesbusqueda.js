
function validateForm() {
    var keywords = document.getElementById('searchInput').value;

    if (keywords.trim() === "") {
        alert      ("Por favor, ingrese palabras clave para buscar.");
        return false;
    }

    return true;
}