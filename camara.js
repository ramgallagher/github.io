const contenedorCrear = document.getElementById('ventana-crear');
const contenedorCaptura = document.getElementById('ventana-captura');
const botonComenzar = document.getElementById('btn-comenzar');



contenedorCrear.style.display = "block";
contenedorCaptura.style.display = "none";

botonComenzar.addEventListener('click', function() {
    contenedorCrear.style.display = "none";
    contenedorCaptura.style.display = "block";
})

