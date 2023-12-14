document.addEventListener('DOMContentLoaded', function () {

    var hardwareLink = document.getElementById('hardware-category');
    var contentContainer2 = document.getElementById('content-container2');
  
    hardwareLink.addEventListener('mouseover', function (event) {
      event.preventDefault(); 
  
      // Simula cargar contenido de hardware (puedes cargar contenido dinámicamente desde tu servidor aquí)
      var hardwareContent = "<h2>Productos de la categoría: Hardware</h2><p>Contenido específico de hardware...</p>";
  
      // Actualiza el contenido en el contenedor
      contentContainer2.innerHTML = hardwareContent;
    });
  
    contentContainer2.addEventListener('mouseout', function (event) {
      event.preventDefault(); 
  
      // Oculta el contenido al salir del enlace
      contentContainer2.innerHTML = "";
    });
  });

  document.addEventListener('DOMContentLoaded', function () {

    var hardwareLink = document.getElementById('hardware-category');
    var contentContainer2 = document.getElementById('content-container2');
  
    hardwareLink.addEventListener('mouseover', function (event) {
      event.preventDefault(); 
  
      // Simula cargar contenido de hardware (puedes cargar contenido dinámicamente desde tu servidor aquí)
      var hardwareContent = "<h2>Productos de la categoría: Hardware</h2><p>Contenido específico de hardware...</p>";
  
      // Actualiza el contenido en el contenedor
      contentContainer2.innerHTML = hardwareContent;
    });
  
    contentContainer2.addEventListener('mouseout', function (event) {
      event.preventDefault(); 
  
      // Oculta el contenido al salir del enlace
      contentContainer2.innerHTML = "";
    });
  });