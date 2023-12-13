document.addEventListener("DOMContentLoaded", function () {
 
  var marcaLink = document.getElementById("marca-category");
  var contentContainer = document.getElementById("content-container");

  
  marcaLink.addEventListener("click", function (event) {
    event.preventDefault(); 

    
    var marcaContent =
    "<h2>Marcas</h2>" +
    '<a href="/src/views/productMarc.ejs">Rayzer</a>' + 
    '<a href="/src/views/productMarc.ejs">Intel</a>'
    ;

    
    contentContainer.innerHTML = marcaContent;
  });
});





document.addEventListener("DOMContentLoaded", function () {
 
  var categoriaLink = document.getElementById("categoria-category");
  var contentContainer = document.getElementById("content-container");

  
  categoriaLink.addEventListener("click", function (event) {
    event.preventDefault(); 

    
    var cateogoriaContent =
    '<h2> categorias</h2>' +
    '<ul>' + 
       '<li><a href="/products/productList/1">Almacenamiento</a></li>'  +
       '<li><a href="/products/productList/2">Ram</a></li>'  +
       '<li><a href="/products/productList/3">Cpu</a></li>'  +
       '<li><a href="/products/productList/4">Motherboard</a></li>'  +
       '<li><a href="/products/productList/5">cooling</a></li>'  +
       '<li><a href="/products/productList/6">Monitor</a></li>'  +
       '<li><a href="/products/productList/7">Silla Gamer</a></li>'  +
       '<li><a href="/products/productList/8">Notebook</a></li>'  +
       '<li><a href="/products/productList/9">Gabinete</a></li>' +
       '<li><a href="/products/productList/10">Perifericos</a></li>' +
       '<li><a href="/products/productList/11">Placa de Video</a></li>'+
       '<li><a href="/products/productList/12">Fuente</a></li>' +
   '</ul>';

    
    contentContainer.innerHTML = cateogoriaContent;
  });
});





document.addEventListener("DOMContentLoaded", function () {
 
  var ofertaLink = document.getElementById("oferta-category");
  var contentContainer = document.getElementById("content-container");

  
  ofertaLink.addEventListener("click", function (event) {
    event.preventDefault(); 

    
    var ofertaContent =
      '<h2> Oferta</h2>' +
      '<ul>' + 
         '<li><a href="/products/productList/1">Oferta Notebook</a></li>'  +
         '<li><a href="/products/productList/2"> Mejores Oferta</a></li>'  +
         '<li><a href="/products/productList/3">Oferta Accesorios</a></li>'  +
     '</ul>';

    
    contentContainer.innerHTML = ofertaContent;
  });
});



document.addEventListener("DOMContentLoaded", function () {
 
  var productoLink = document.getElementById("producto-category");
  var contentContainer = document.getElementById("content-container");

  
  productoLink.addEventListener("click", function (event) {
    event.preventDefault(); 

    
    var productoContent =
    '<h2> Todos Los Productos</h2>' +
      '<ul>' + 
         '<li><a href="/products/productList/1">Notebook</a></li>'  +
         '<li><a href="/products/productList/2"> Monitor</a></li>'  +
         '<li><a href="/products/productList/3"> Cpu</a></li>'  +
     '</ul>';

    
    contentContainer.innerHTML = productoContent;
  });
});