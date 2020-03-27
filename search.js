let APIKEY = "bDgrAsOgnsjQTVFZNv9Vu5m7Z6kRi930";
let sugerencia1 = document.getElementById('sugerencia1');
let sugerencia2 = document.getElementById('sugerencia2');
let sugerencia3 = document.getElementById('sugerencia3');
let sugerencia4 = document.getElementById('sugerencia4');


/* botones ver mas */

sugerencia1.addEventListener('click' , () => {
let ventanaTendencias = document.getElementById('ventana-tendencias');
let ventanaResultados = document.getElementById('ventana-resultado');
document.getElementById("texto-resultados").placeholder =   "  Resultados para: BEAR GIF"

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


sugerencia2.addEventListener('click' , () => {
  let ventanaTendencias = document.getElementById('ventana-tendencias');
  let ventanaResultados = document.getElementById('ventana-resultado');
  
document.getElementById("texto-resultados").placeholder =   "  Resultados para: KERMIT GIF"
  
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


  sugerencia3.addEventListener('click' , () => {
    let ventanaTendencias = document.getElementById('ventana-tendencias');
    let ventanaResultados = document.getElementById('ventana-resultado');
    
document.getElementById("texto-resultados").placeholder =   "  Resultados para: MUPPET GIF"
    
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

    sugerencia4.addEventListener('click' , () => {
      let ventanaTendencias = document.getElementById('ventana-tendencias');
      let ventanaResultados = document.getElementById('ventana-resultado');
      
    
document.getElementById("texto-resultados").placeholder =   "  Resultados para: CALAMARDO GIF"
      
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

