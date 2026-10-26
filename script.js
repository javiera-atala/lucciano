// Sitio estático, compatible con GitHub Pages.
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
// Animaciones CSS se desactivan automáticamente cuando el visitante solicita movimiento reducido.
