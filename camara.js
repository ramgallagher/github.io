const contenedorCrear = document.getElementById('ventana-crear');
const contenedorCaptura = document.getElementById('ventana-captura');
const botonComenzar = document.getElementById('btn-comenzar');
const botonCamara = document.querySelector('.btn-cam');
const botonCapturar = document.getElementById('btn-capturar');
const botonRecord = document.querySelector('.btn-record');
const botonListo = document.querySelector('.btn-listo');




contenedorCrear.style.display = "block";
contenedorCaptura.style.display = "none";

botonComenzar.addEventListener('click', function() {
    contenedorCrear.style.display = "none";
    contenedorCaptura.style.display = "block";
    botonCapturar.style.display = "block";
    botonRecord.style.display = "none";
    botonListo.style.display = "none";
    
})

botonCapturar.addEventListener('click', () => {
    contenedorCrear.style.display = "none";
    contenedorCaptura.style.display = "block";
    botonCapturar.style.display = "none";
    botonCamara.style.display = "none";
    botonRecord.style.display = "flex";
    botonListo.style.display = "block";
    
} )




