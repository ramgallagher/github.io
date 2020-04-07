/* Menu dropdown*/

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

/* Cambio de tema, dark - light */

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


/* Fin cambio de tema, dark - light */



/* Cambio texto resultados */
let ventanaTendencias = document.getElementById('ventana-tendencias');
let ventanaResultados = document.getElementById('ventana-resultado');

ventanaTendencias.style.display = "block";
ventanaResultados.style.display = "none";


/* Cambio de estados de boton*/

function cambioEstado() {
    if (document.body.className.match('light')) {
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
/* fin cambio de estados de boton*/