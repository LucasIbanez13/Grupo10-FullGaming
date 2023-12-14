document.addEventListener('DOMContentLoaded', function () {

  var contentContainer2 = document.getElementById('content-container2');

  function handleMouseOver(event, content) {
      event.preventDefault();
      contentContainer2.innerHTML = content;
  }

  function handleMouseOut(event) {
      event.preventDefault();
      contentContainer2.innerHTML = "";
  }

  var almacenamientoLink = document.getElementById('almacenamiento-cont');
  almacenamientoLink.addEventListener('mouseover', function (event) {
      handleMouseOver(event, "<h2>almacenamiento</h2>");
  });
  almacenamientoLink.addEventListener('mouseout', handleMouseOut);

  var ramLink = document.getElementById('ram-cont');
  ramLink.addEventListener('mouseover', function (event) {
      handleMouseOver(event, "<h2>RAM</h2>");
  });
  ramLink.addEventListener('mouseout', handleMouseOut);

  var notebookLink = document.getElementById('notebook-cont');
  notebookLink.addEventListener('mouseover', function (event) {
      handleMouseOver(event, "<h2>notebook</h2>");
  });
  notebookLink.addEventListener('mouseout', handleMouseOut);

  var placaLink = document.getElementById('placa-cont');
  placaLink.addEventListener('mouseover', function (event) {
      handleMouseOver(event, "<h2>placa</h2>");
  });
  placaLink.addEventListener('mouseout', handleMouseOut);

  var monitoresLink = document.getElementById('monitores-cont');
  monitoresLink.addEventListener('mouseover', function (event) {
      handleMouseOver(event, "<h2>monitores</h2>");
  });
  monitoresLink.addEventListener('mouseout', handleMouseOut);

  var perifericosLink = document.getElementById('perifericos-cont');
  perifericosLink.addEventListener('mouseover', function (event) {
      handleMouseOver(event, "<h2>periféricos</h2>");
  });
  perifericosLink.addEventListener('mouseout', handleMouseOut);

  var accesoriosLink = document.getElementById('accesorios-cont');
  accesoriosLink.addEventListener('mouseover', function (event) {
      handleMouseOver(event, "<h2>accesorios</h2>");
  });
  accesoriosLink.addEventListener('mouseout', handleMouseOut);

  var motherboardLink = document.getElementById('motherboard-cont');
  motherboardLink.addEventListener('mouseover', function (event) {
      handleMouseOver(event, "<h2> Las mejores motherboard</h2>" + "<p> conseguilas en nuestra pagina</p>");
  });
  motherboardLink.addEventListener('mouseout', handleMouseOut);

  var coolingLink = document.getElementById('cooling-cont');
  coolingLink.addEventListener('mouseover', function (event) {
      handleMouseOver(event, "<h2>cooling</h2>");
  });
  coolingLink.addEventListener('mouseout', handleMouseOut);

  var gabineteLink = document.getElementById('gabinete-cont');
  gabineteLink.addEventListener('mouseover', function (event) {
      handleMouseOver(event, "<h2>gabinete</h2>");
  });
  gabineteLink.addEventListener('mouseout', handleMouseOut);

  var fuentesLink = document.getElementById('fuentes-cont');
  fuentesLink.addEventListener('mouseover', function (event) {
      handleMouseOver(event, "<h2>fuentes</h2>");
  });
  fuentesLink.addEventListener('mouseout', handleMouseOut);

  var cpuLink = document.getElementById('cpu-cont');
  cpuLink.addEventListener('mouseover', function (event) {
      handleMouseOver(event, "<h2>cpu</h2>");
  });
  cpuLink.addEventListener('mouseout', handleMouseOut);
});