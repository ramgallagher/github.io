
/* Declaracion de variables y manejo del DOM */

const contenedorCrear = document.getElementById('ventana-crear');
const contenedorCaptura = document.getElementById('ventana-captura');
const botonComenzar = document.getElementById('btn-comenzar');
const botonCamara = document.querySelector('.btn-cam');
const botonCapturar = document.querySelector('.btn-capturar');
const botonRecord = document.querySelector('.btn-record');
const botonListo = document.querySelector('.btn-listo');
const video = document.getElementById('contenedor-captura');
const timer = document.querySelector('.timer');
const titulo= document.getElementById('titulo');
const botonRepetir = document.getElementById('btn-repetir');
const botonSubir = document.getElementById('btn-subir');




contenedorCrear.style.display = "block";
contenedorCaptura.style.display = "none";

botonComenzar.addEventListener('click', function() {
    contenedorCrear.style.display = "none";
    contenedorCaptura.style.display = "block";
    botonCapturar.style.display = "block";
    botonRecord.style.display = "none";
    botonListo.style.display = "none";
    timer.style.display = "none";
    botonRepetir.style.display = "none";
    botonSubir.style.display = "none";


    navigator.mediaDevices
    .getUserMedia({
        audio: false,
        video: { 
            heigth:{  max: 480
            }
        }
    })
    .then(function(stream) {
        video.srcObject = stream;
      video.play();
    })
    
})

botonCapturar.addEventListener('click', () => {
    contenedorCrear.style.display = "none";
    contenedorCaptura.style.display = "block";
    botonCapturar.style.display = "none";
    botonCamara.style.display = "none";
    botonRecord.style.display = "flex";
    botonListo.style.display = "block";
    timer.style.display = "block";
    titulo.innerHTML = "Capturando tu Guifo";


    
} )

botonListo.addEventListener('click', ()=> {
    contenedorCrear.style.display = "none";
    contenedorCaptura.style.display = "block";
    botonCapturar.style.display = "none";
    botonCamara.style.display = "none";
    botonRecord.style.display = "none";
    botonListo.style.display = "none";
    timer.style.display = "block";
    titulo.innerHTML = "Capturando tu Guifo";
    botonRepetir.style.display = "inline-block";
    botonSubir.style.display = "inline-block";
    
})

    

/* cronometro */ 
    var inicio=0;
	var timeout=0;
 
	function empezarDetener(elemento)
	{
		if(timeout==0)
		{
			// start timer
 
			elemento.value="Detener";
 
			// Obtenemos el valor actual
			inicio=vuelta=new Date().getTime();
 
			// iniciamos el proceso
			funcionando();
		}else{
			// stop 
 
			elemento.value="Empezar";
			clearTimeout(timeout);
			timeout=0;
		}
	}
 
	function funcionando()
	{
		var actual = new Date().getTime();
 		var diff=new Date(actual-inicio);
 		var result=LeadingZero(diff.getUTCHours())+":"+LeadingZero(diff.getUTCMinutes())+":"+LeadingZero(diff.getUTCSeconds());
		document.getElementById('crono').innerHTML = result;
		timeout=setTimeout("funcionando()",1000);
	}
 
	function LeadingZero(Time) {
		return (Time < 10) ? "0" + Time : + Time;
    }
    
    
/* fin cronometro */ 

