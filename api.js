function init () {

    traerGifs()
    
    const container = document.getElementById("tendencias");
    let busqueda = document.getElementById('search').value.trim();
    traerGifs(busqueda);

    function traerGifs(busqueda) {
        let url = '';

        if (busqueda) {
            url= `htpps://api.giphy.com/v1/gifs/search?api_key=bDgrAsOgnsjQTVFZNv9Vu5m7Z6kRi930&limit=10&q=`
            url += busqueda;
        } else {
            url = `htpps://api.giphy.com/v1/gifs/trending?api_key=bDgrAsOgnsjQTVFZNv9Vu5m7Z6kRi930&limit=10`
        }

      }
      function loadGif(gif) {


        let fig = document.createElement('div')
        let img = document.createElement('img')
        let fc = document.createElement('figcaption')
        img.setAttribute("width", "270 ")
        img.setAttribute("height", "270")
        img.src = gif.images.downsized.url
        img.alt = gif.title
        fig.appendChild(img)
        fig.appendChild(fc)
        container.appendChild(fig)




    }


        

        fetch(url)
            .then(response => response.json())
            .then(content => {
                console.log(content.data)
                console.log("META", content.meta)
                container.innerHTML = ''
                content.data.forEach(gif => {
                   
                    loadGif(gif)
                });

                document.querySelector("#search").value = ""

            })
            .catch(err => {
                console.error(err);
            });

        }
