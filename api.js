function traerGifs () {
    let fig = document.createElement('div')
    let img = document.createElement('img')
    img.setAttribute("width", "313")
    img.setAttribute("height", "313")
    img.src = obj.images.downsized.url
    fig.appendChild(img);
    results.appendChild(fig);
}




    const apikey = 'bDgrAsOgnsjQTVFZNv9Vu5m7Z6kRi930';
    const path = `https://api.giphy.com/v1/gifs/trending?api_key=${apikey}&limit=12`;
    
    
    fetch(path).then(function (response) {
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
    
    }).catch(function (err) {
        console.log(err.message)
    })


