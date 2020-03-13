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


const body = document.querySelector('body');
document.getElementById('dark').addEventListener('click', () => {
    const body = document.querySelector('body');
    body.classList.add('dark');
    var logo = document.getElementById('logo')
    logo.src = "./img/gifOF_logo_dark.png";


})