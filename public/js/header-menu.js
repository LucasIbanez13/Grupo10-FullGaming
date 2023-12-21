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
      handleMouseOver(event, "<p> Libera espacio para nuevas posibilidades: descubre nuestro almacenamiento para PC y lleva tu experiencia informática al siguiente nivel</p>");
  });
  almacenamientoLink.addEventListener('mouseout', handleMouseOut);

  var ramLink = document.getElementById('ram-cont');
  ramLink.addEventListener('mouseover', function (event) {
      handleMouseOver(event, "<p> Acelera tu rendimiento con nuestra RAM de alto rendimiento: la clave para un PC más rápido y eficiente. Potencia tus tareas y maximiza tu experiencia informática.</p>");
  });
  ramLink.addEventListener('mouseout', handleMouseOut);

  var notebookLink = document.getElementById('notebook-cont');
  notebookLink.addEventListener('mouseover', function (event) {
      handleMouseOver(event, "<p> Potencia tu portabilidad. Descubre la eficiencia en cada pulgada con nuestros notebooks</p>");
  });
  notebookLink.addEventListener('mouseout', handleMouseOut);

  var placaLink = document.getElementById('placa-cont');
  placaLink.addEventListener('mouseover', function (event) {
      handleMouseOver(event, "<p> Gráficos extraordinarios, rendimiento excepcional. Eleva tu experiencia visual con nuestras placas de video de última generación</p>");
  });
  placaLink.addEventListener('mouseout', handleMouseOut);

  var monitoresLink = document.getElementById('monitores-cont');
  monitoresLink.addEventListener('mouseover', function (event) {
      handleMouseOver(event, "<p> Visualiza el mundo en alta definición. Descubre la claridad y detalle que mereces con nuestros monitores de vanguardia.</p>");
  });
  monitoresLink.addEventListener('mouseout', handleMouseOut);

  var perifericosLink = document.getElementById('perifericos-cont');
  perifericosLink.addEventListener('mouseover', function (event) {
      handleMouseOver(event, "<p> Mejora tu experiencia con nuestros periféricos de primera. Rendimiento y comodidad en cada clic</p>");
  });
  perifericosLink.addEventListener('mouseout', handleMouseOut);

  var accesoriosLink = document.getElementById('accesorios-cont');
  accesoriosLink.addEventListener('mouseover', function (event) {
      handleMouseOver(event, "<p> Potencia tu PC con estilo. Descubre nuestra gama de accesorios, donde la funcionalidad y el diseño se encuentran en perfecta armonía</p>");
  });
  accesoriosLink.addEventListener('mouseout', handleMouseOut);

  var motherboardLink = document.getElementById('motherboard-cont');
  motherboardLink.addEventListener('mouseover', function (event) {
      handleMouseOver(event, "<p> La base de un rendimiento excepcional. Descubre nuestras motherboards: potencia, fiabilidad y tecnología de vanguardia en cada conexión</p>");
  });
  motherboardLink.addEventListener('mouseout', handleMouseOut);

  var coolingLink = document.getElementById('cooling-cont');
  coolingLink.addEventListener('mouseover', function (event) {
      handleMouseOver(event, "<p> Mantén la frescura de tu PC con nuestros coolers de alto rendimiento. La potencia sin sobrecalentamiento, diseñada para elevar tu experiencia informática.</p>");
  });
  coolingLink.addEventListener('mouseout', handleMouseOut);

  var gabineteLink = document.getElementById('gabinete-cont');
  gabineteLink.addEventListener('mouseover', function (event) {
      handleMouseOver(event, "<p> Eleva tu estilo, optimiza tu espacio. Descubre nuestros gabinetes para PC: diseño moderno y funcionalidad avanzada, la combinación perfecta para tu estación de batalla.</p>");
  });
  gabineteLink.addEventListener('mouseout', handleMouseOut);

  var fuentesLink = document.getElementById('fuentes-cont');
  fuentesLink.addEventListener('mouseover', function (event) {
      handleMouseOver(event, "<p>Potencia sin límites, confianza sin igual. Descubre nuestras fuentes de poder para PC: energía eficiente y confiable para impulsar tu rendimiento al máximo</p>");
  });
  fuentesLink.addEventListener('mouseout', handleMouseOut);

  var cpuLink = document.getElementById('cpu-cont');
  cpuLink.addEventListener('mouseover', function (event) {
      handleMouseOver(event, "<p> El corazón de la potencia informática. Descubre nuestra línea de CPUs: rendimiento excepcional, velocidad sin límites, la clave para desbloquear tu potencial</p>");
  });
  cpuLink.addEventListener('mouseout', handleMouseOut);
});