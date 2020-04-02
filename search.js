let APIKEY = "bDgrAsOgnsjQTVFZNv9Vu5m7Z6kRi930";
let sugerencia1 = document.getElementById('sugerencia1');
let sugerencia2 = document.getElementById('sugerencia2');
let sugerencia3 = document.getElementById('sugerencia3');
let sugerencia4 = document.getElementById('sugerencia4');
let sugerencia5 = document.getElementById('sugerencia5');
let sugerencia6 = document.getElementById('sugerencia6');
let sugerencia7 = document.getElementById('sugerencia7');
let estadoBoton = document.querySelector('.lupa1');
let estadoBotonActivo = document.querySelector('.lupa2');
let estadoBotonDark = document.querySelector('.lupa3');
let estadoBotonDarkActivo = document.querySelector('.lupa4');
let search = document.getElementById('search-input');
let btnSearch = document.getElementById('btn-search');
/* botones ver mas */



sugerencia1.addEventListener('click', () => {
  let ventanaTendencias = document.getElementById('ventana-tendencias');
  let ventanaResultados = document.getElementById('ventana-resultado');
  document.getElementById("texto-resultados").placeholder = "  Resultados para: BEAR GIF"

  ventanaTendencias.style.display = "none";
  ventanaResultados.style.display = "block";

  url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=12&q=`;
  url += 'bear'

  fetch(url).then(function (response) {
      return response.json()
    }).then(function (json) {

      console.log(json.data[0].images.fixed_width.url)
      const results = document.getElementById('tendencias_resultados');
      let resultsHTML = '';
      json.data.forEach(function (obj) {

        const url = obj.images.fixed_width.url
        const width = obj.images.fixed_width.width
        resultsHTML += `<img src="${url}" width="313" height="313">`


      })
      results.innerHTML = resultsHTML;

    })
    .catch(err => {
      console.error(err);
    });

})


sugerencia2.addEventListener('click', () => {
  let ventanaTendencias = document.getElementById('ventana-tendencias');
  let ventanaResultados = document.getElementById('ventana-resultado');

  document.getElementById("texto-resultados").placeholder = "  Resultados para: KERMIT GIF"

  ventanaTendencias.style.display = "none";
  ventanaResultados.style.display = "block";

  url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=12&q=`;
  url += 'kermit'

  fetch(url).then(function (response) {
      return response.json()
    }).then(function (json) {

      console.log(json.data[0].images.fixed_width.url)
      const results = document.getElementById('tendencias_resultados');
      let resultsHTML = '';
      json.data.forEach(function (obj) {

        const url = obj.images.fixed_width.url
        const width = obj.images.fixed_width.width
        resultsHTML += `<img src="${url}" width="313" height="313">`


      })
      results.innerHTML = resultsHTML;

    })
    .catch(err => {
      console.error(err);
    });

})


sugerencia3.addEventListener('click', () => {
  let ventanaTendencias = document.getElementById('ventana-tendencias');
  let ventanaResultados = document.getElementById('ventana-resultado');

  document.getElementById("texto-resultados").placeholder = "  Resultados para: MUPPET GIF"

  ventanaTendencias.style.display = "none";
  ventanaResultados.style.display = "block";

  url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=12&q=`;
  url += 'muppet'

  fetch(url).then(function (response) {
      return response.json()
    }).then(function (json) {

      console.log(json.data[0].images.fixed_width.url)
      const results = document.getElementById('tendencias_resultados');
      let resultsHTML = '';
      json.data.forEach(function (obj) {

        const url = obj.images.fixed_width.url
        const width = obj.images.fixed_width.width
        resultsHTML += `<img src="${url}" width="313" height="313">`


      })
      results.innerHTML = resultsHTML;

    })
    .catch(err => {
      console.error(err);
    });

})

sugerencia4.addEventListener('click', () => {
  let ventanaTendencias = document.getElementById('ventana-tendencias');
  let ventanaResultados = document.getElementById('ventana-resultado');


  document.getElementById("texto-resultados").placeholder = "  Resultados para: CALAMARDO GIF"

  ventanaTendencias.style.display = "none";
  ventanaResultados.style.display = "block";

  url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=12&q=`;
  url += 'calamardo'

  fetch(url).then(function (response) {
      return response.json()
    }).then(function (json) {

      console.log(json.data[0].images.fixed_width.url)
      const results = document.getElementById('tendencias_resultados');
      let resultsHTML = '';
      json.data.forEach(function (obj) {

        const url = obj.images.fixed_width.url
        const width = obj.images.fixed_width.width
        resultsHTML += `<img src="${url}" width="313" height="313">`


      })
      results.innerHTML = resultsHTML;

    })
    .catch(err => {
      console.error(err);
    });

})



/* fin botones ver mas */

/* botones del search */
sugerencia5.addEventListener('click', () => {
  let ventanaTendencias = document.getElementById('ventana-tendencias');
  let ventanaResultados = document.getElementById('ventana-resultado');

  document.getElementById("texto-resultados").placeholder = "  Resultados para: SIMPSONS"

  ventanaTendencias.style.display = "none";
  ventanaResultados.style.display = "block";

  url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=12&q=`;
  url += 'simpsons'

  fetch(url).then(function (response) {
      return response.json()
    }).then(function (json) {

      console.log(json.data[0].images.fixed_width.url)
      const results = document.getElementById('tendencias_resultados');
      let resultsHTML = '';
      json.data.forEach(function (obj) {

        const url = obj.images.fixed_width.url
        const width = obj.images.fixed_width.width
        resultsHTML += `<img src="${url}" width="313" height="313">`


      })
      results.innerHTML = resultsHTML;

    })
    .catch(err => {
      console.error(err);
    });

})

sugerencia6.addEventListener('click', () => {
  let ventanaTendencias = document.getElementById('ventana-tendencias');
  let ventanaResultados = document.getElementById('ventana-resultado');

  document.getElementById("texto-resultados").placeholder = "  Resultados para: CATS"

  ventanaTendencias.style.display = "none";
  ventanaResultados.style.display = "block";

  url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=12&q=`;
  url += 'cats'

  fetch(url).then(function (response) {
      return response.json()
    }).then(function (json) {

      console.log(json.data[0].images.fixed_width.url)
      const results = document.getElementById('tendencias_resultados');
      let resultsHTML = '';
      json.data.forEach(function (obj) {

        const url = obj.images.fixed_width.url
        const width = obj.images.fixed_width.width
        resultsHTML += `<img src="${url}" width="313" height="313">`


      })
      results.innerHTML = resultsHTML;

    })
    .catch(err => {
      console.error(err);
    });

})

sugerencia7.addEventListener('click', () => {
  let ventanaTendencias = document.getElementById('ventana-tendencias');
  let ventanaResultados = document.getElementById('ventana-resultado');

  document.getElementById("texto-resultados").placeholder = "  Resultados para: FUTURAMA"

  ventanaTendencias.style.display = "none";
  ventanaResultados.style.display = "block";

  url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=12&q=`;
  url += 'futurama'

  fetch(url).then(function (response) {
      return response.json()
    }).then(function (json) {

      console.log(json.data[0].images.fixed_width.url)
      const results = document.getElementById('tendencias_resultados');
      let resultsHTML = '';
      json.data.forEach(function (obj) {

        const url = obj.images.fixed_width.url
        const width = obj.images.fixed_width.width
        resultsHTML += `<img src="${url}" width="313" height="313">`


      })
      results.innerHTML = resultsHTML;

    })
    .catch(err => {
      console.error(err);
    });

})

/* fin botones del search */



document.addEventListener("DOMContentLoaded", init);



function init() {
  document.getElementById("btn-search").addEventListener("click", ev => {
    ev.preventDefault();


    let ventanaTendencias = document.getElementById('ventana-tendencias');
    let ventanaResultados = document.getElementById('ventana-resultado');


    ventanaTendencias.style.display = "none";
    ventanaResultados.style.display = "block";

    let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=12&q=`;
    let str = document.getElementById("search-input").value.trim();
    url = url.concat(str);
    console.log(url);









    fetch(url).then(function (response) {
        return response.json()
      }).then(function (json) {

        console.log(json.data[0].images.fixed_width.url)
        const results = document.getElementById('tendencias_resultados');
        let resultsHTML = '';
        json.data.forEach(function (obj) {

          const url = obj.images.fixed_width.url
          const width = obj.images.fixed_width.width
          resultsHTML += `<img src="${url}" width="313" height="313">`


        })
        results.innerHTML = resultsHTML;

      })
      .catch(err => {
        console.error(err);
      });
  });
}

function cambioEstado() {
  if (document.body.className.match('light')){
    if (search.value == null || search.value.length == 0 || /^\s+$/.test(search.value)) {
      estadoBoton1();
    } else {
      estadoBoton2();
    }
  }
  if (document.body.className.match('dark')) {
    if (search.value == null || search.value.length == 0 || /^\s+$/.test(search.value)) {
      estadoBoton3();
    } else {
      estadoBoton4();
    }
  }
}







function estadoBoton1() {
  document.getElementById('btn-search').style.color = "#B4B4B4";
  document.getElementById('btn-search').style.border = "1px solid #808080";
  document.getElementById('btn-search').style.background = "#E6E6E6";
  document.getElementById('btn-search').style.boxShadow = "inset -1px -1px 0 0 #B4B4B4, inset 1px 1px 0 0 #FFFFFF";
  estadoBoton.style.display = "inline-block";
  estadoBotonActivo.style.display = "none";
  estadoBotonDark.style.display = "none";
  estadoBotonDarkActivo.style.display = "none";

}

function estadoBoton2() {
  document.getElementById('btn-search').style.color = "#110038";
  document.getElementById('btn-search').style.border = "1px solid #110038";
  document.getElementById('btn-search').style.background = "#F7C9F3";
  document.getElementById('btn-search').style.boxShadow = "inset -1px -1px 0 0 #997D97, inset 1px 1px 0 0 #FFFFFF";
  estadoBoton.style.display = "none";
  estadoBotonActivo.style.display = "inline-block";
  estadoBotonDark.style.display = "none";
  estadoBotonDarkActivo.style.display = "none";

}

function estadoBoton3() {
  document.getElementById('btn-search').style.color = "#8F8F8F";
  document.getElementById('btn-search').style.border = "1px solid #808080";
  document.getElementById('btn-search').style.background = "#B4B4B4";
  document.getElementById('btn-search').style.boxShadow = "inset -1px -1px 0 0 #B4B4B4, inset 1px 1px 0 0 #FFFFFF";
  estadoBoton.style.display = "none";
  estadoBotonActivo.style.display = "none";
  estadoBotonDark.style.display = "inline-block";
  estadoBotonDarkActivo.style.display = "none";

}

function estadoBoton4() {
  document.getElementById('btn-search').style.color = "#FFFFFF";
  document.getElementById('btn-search').style.border = "1px solid #110038";
  document.getElementById('btn-search').style.background = "#EE3EFE";
  document.getElementById('btn-search').style.boxShadow = "inset -1px -1px 0 0 #A72CB3, inset 1px 1px 0 0 #FFFFFF";
  estadoBoton.style.display = "none";
  estadoBotonActivo.style.display = "none";
  estadoBotonDark.style.display = "none";
  estadoBotonDarkActivo.style.display = "inline-block";

}