/* Declaracion de variables y manejo del DOM */

const contenedorCrear = document.getElementById('ventana-crear');
const contenedorUpload = document.getElementById('ventana-captura2');
const contenedorCaptura = document.getElementById('ventana-captura');
const contenedorFinal = document.getElementById('ventana-exito');
const botonComenzar = document.getElementById('btn-comenzar');
const botonCamara = document.querySelector('.btn-cam');
const botonCapturar = document.querySelector('.btn-capturar');
const botonRecord = document.querySelector('.btn-record');
const botonListo = document.querySelector('.btn-listo');
const botonCopiar = document.getElementById('copy_link');
const contenedorVideo = document.querySelector(".video-container")
const video = document.getElementById('contenedor-captura');
const img = document.createElement("img");
const timer = document.querySelector('.timer');
const titulo = document.getElementById('titulo');
const botonRepetir = document.getElementById('btn-repetir');
const botonSubir = document.getElementById('btn-subir');
let recorder = null;
let blob = null;
let container = document.getElementById('gif-final');

let text = document.querySelector('.text');

var arreglo = [];
var arrayGuifos = [];



text.style.display = "none";
contenedorCrear.style.display = "block";
contenedorCaptura.style.display = "none";
contenedorUpload.style.display = "none";
contenedorFinal.style.display = "none";


/* Botones */

botonComenzar.addEventListener('click', async () => {
    contenedorCrear.style.display = "none";
    contenedorCaptura.style.display = "block";
    botonCapturar.style.display = "block";
    botonRecord.style.display = "none";
    botonListo.style.display = "none";
    timer.style.display = "none";
    botonRepetir.style.display = "none";
    botonSubir.style.display = "none";

    recorder = await startRecord(recorder, video);



})


/* Comienza a grabar */

botonCapturar.addEventListener('click', async () => {
    contenedorCrear.style.display = "none";
    contenedorCaptura.style.display = "block";
    botonCapturar.style.display = "none";
    botonCamara.style.display = "none";
    botonRecord.style.display = "flex";
    botonListo.style.display = "block";
    timer.style.display = "block";
    titulo.innerHTML = "Capturando tu Guifo";
    document.querySelector(".sugerencias").style.display = "none";

})




/* Se detiene la grabacion */

botonListo.addEventListener('click', async () => {
    await stopRecord(recorder, video);
    contenedorCrear.style.display = "none";
    contenedorCaptura.style.display = "block";
    botonCapturar.style.display = "none";
    botonCamara.style.display = "none";
    botonRecord.style.display = "none";
    botonListo.style.display = "none";
    timer.style.display = "block";
    titulo.innerHTML = "Vista previa";
    botonRepetir.style.display = "inline-block";
    botonSubir.style.display = "inline-block";
    clearTimeout(timeout);

})


/* Repetir captura */
botonRepetir.addEventListener('click', async () => {
    botonCapturar.style.display = "none";
    botonListo.style.display = "block";
    video.style.display = "block";
    img.src = URL.revokeObjectURL(blob);
    img.style.display = "block";
    botonRecord.style.display = "block";
    botonCamara.style.display = "none"
    timer.style.display = "block";
    botonRepetir.style.display = "none";
    botonSubir.style.display = "none";


    recorder = await startRecord(recorder, video);


})




const getMedia = async () => {
    let stream = null;
    try {
        stream = await navigator.mediaDevices.getUserMedia({
            video: {
                height: {
                    max: 480
                }
            },
            audio: false
        });
        return stream;
    } catch (err) {
        console.log("No se puede acceder a la cámara");
    }
};


/* Subiendo guifo */

botonSubir.addEventListener('click', async () => {
    contenedorUpload.style.display = "block";
    contenedorCaptura.style.display = "none";
    setTimeout(function () {
        contenedorCaptura.style.display = "none";
        contenedorUpload.style.display = "none";
        contenedorFinal.style.display = "block"
    }, 3000);


})







/* Funcion grabar */

const startRecord = async (recorder, video) => {
    let stream = await getMedia();
    video.srcObject = stream;
    video.play();
    recorder = new RecordRTCPromisesHandler(stream, {
        type: "gif",
        frameRate: 1,
        quality: 10,
        width: 360,
        hidden: 240,
        onGifRecordingStarted: function () {

        }
    });
    recorder.startRecording();
    return recorder;
};


/* Funcion Stop */
const stopRecord = async (recorder, video) => {
    video.srcObject = null;
    video.pause();
    await recorder.stopRecording();
    let blob = await recorder.getBlob();


    /*agregar addeventlistener del boton upload y formdata y pasarlo al fetch */



    botonSubir.addEventListener('click', function () {

        let form = new FormData();
        form.append("file", blob, "myGif.gif");
        console.log(form.get("file"));
        fetch("https://upload.giphy.com/v1/gifs?api_key=" + apikey, {
                method: 'POST',
                body: form,
            })
            .then(response => {
                console.log(response.status);
                return response.json();
            })
            .then(data => {
                var dataid = data.data.id;
                fetch("https://api.giphy.com/v1/gifs/" + dataid + "?api_key=" + apikey)
                    .then(response => {
                        console.log(response);
                        return response.json();
                    })
                    .then(data => {
                        console.log(data)
                        let imgfinal = document.querySelector(".imgfinal0");
                        imgfinal.setAttribute("src", data.data.images.downsized.url);
                        imgfinal.setAttribute("alt", data.data.title);
                        imgfinal.setAttribute("width", "320");
                        imgfinal.setAttribute("height", "240");
                        let getLink = document.querySelector(".download_link");
                        getLink.setAttribute("action", data.data.bitly_url);
                        botonCopiar.addEventListener("click", () => {
                            navigator.clipboard.writeText(data.data.bitly_url);
                            document.querySelector(".text").style.display = "block";
                            var ref = setInterval(() => {
                                document.querySelector(".text").style.display = "none";
                            }, 5000);
                        });
                        if (localStorage.getItem("mis-guifos") == null) {
                            arrayGuifos.push(data);
                            localStorage.setItem("mis-guifos", JSON.stringify(arrayGuifos));
                        } else {
                            arrayGuifos = JSON.parse(localStorage.getItem("mis-guifos"));
                            arrayGuifos.push(data);
                            localStorage.setItem("mis-guifos", JSON.stringify(arrayGuifos));
                        }

                    })
                    .catch(error => {
                        return error;
                    });
            })
            .catch(error => {
                return error;
            });
    })

    vistaPrevia(blob);
    return blob;


};





/* Vista previa de la captura */

const vistaPrevia = blob => {
    video.style.display = "none";
    img.src = URL.createObjectURL(blob);
    img.setAttribute("width", "840");
    img.setAttribute("height", "440");
    img.style.objectFit = "cover";
    contenedorVideo.appendChild(img);



};


/* cronometro */
var inicio = 0;
var timeout = 0;

function empezarDetener(elemento) {
    if (timeout == 0) {
        // start timer

        elemento.value = "Detener";

        // Obtenemos el valor actual
        inicio = vuelta = new Date().getTime();

        // iniciamos el proceso
        funcionando();
    } else {
        // stop 

        elemento.value = "Empezar";
        clearTimeout(timeout);
        timeout = 0;
    }
}

function funcionando() {
    var actual = new Date().getTime();
    var diff = new Date(actual - inicio);
    var result = LeadingZero(diff.getUTCHours()) + ":" + LeadingZero(diff.getUTCMinutes()) + ":" + LeadingZero(diff.getUTCSeconds());
    document.getElementById('crono').innerHTML = result;
    timeout = setTimeout("funcionando()", 1000);
}

function LeadingZero(Time) {
    return (Time < 10) ? "0" + Time : +Time;
}


/* fin cronometro */

/* Crea mis guifos del local storage a la galeria */


document.querySelector(".mis-guifos").addEventListener("click", () => {
    CrearGuifos();
});


document.querySelector('.btn-listo2').addEventListener("click", () => {
    contenedorFinal.style.display = "none";
    document.getElementById('bar_mis_guifos').style.display = "block";
    CrearGuifos();
});

// /* Funcion para crear los gifs */









// function CrearGuifos() {
//     let valor = localStorage.getItem("mis-guifos");
//     const data = JSON.parse(valor);
    
//     for (var i = 0; i < data.length; i++) {
//         arreglo.push(data[i]);
//     }

//     for (var i = 0; i < valor.length; i++) {
//         let imgfinal = document.querySelector(".mis_guifos_img" + i);
//         imgfinal.setAttribute("src", arreglo[i].data.images.downsized.url);
//         imgfinal.setAttribute("alt", arreglo[i].data.title);
//         imgfinal.setAttribute("width", "320");
//         imgfinal.setAttribute("height", "240");
//         document.querySelector(".guifos_img" + i).style.display = "block";
//     }
//     contenedorCrear.style.display = "none";
//     document.querySelector(".btn-crear").style.display = "block";
//     document.getElementById('bar_mis_guifos').style.display = "block";
//     document.querySelectorAll('.contenedor-mis-guifos')[0].style.display = "flex"
//     if (arreglo.length > 4) {
//         document.querySelectorAll('.contenedor-mis-guifos')[1].style.display = "block"
//     }
//     if (arreglo.length > 8) {
//         document.querySelectorAll('.contenedor-mis-guifos')[2].style.display = "block"
//     }
//     arreglo = [];

// }