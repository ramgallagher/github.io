/* menu dropdown*/

const button = document.getElementById("btn-menu");
const list = document.getElementById("list");

list.style.display = "none";

button.addEventListener("click", (event) => {
    if (list.style.display == "none") {
        list.style.display = "block";
    } else {
        list.style.display = "none";
    }
})

function dropdown() {
    var menu = document.getElementById('lista');
    if (menu.style.visibility === "hidden") {
        menu.style.visibility = "visible";
    } else {
        menu.style.visibility = "hidden";
    }

}



let ventanaTendencias = document.getElementById('ventana-tendencias');
let ventanaResultados = document.getElementById('ventana-resultado');

ventanaTendencias.style.display = "block";
ventanaResultados.style.display = "none";





const body = document.querySelector('body');
document.getElementById('dark').addEventListener('click', () => {
    const body = document.querySelector('body');
    body.classList.add('dark');
    body.classList.remove('light');
    
    
    localStorage.setItem('color-theme', 'dark');

})

document.getElementById('day').addEventListener('click', () => {
    const body = document.querySelector('body');
    body.classList.add('light');
    body.classList.remove('dark');
    
    localStorage.setItem('color-theme', 'day');

})



const colorfondo = localStorage.getItem('color-theme');
if (colorfondo === null) {
    body.className = 'light';

} else {
    body.className = colorfondo;

}