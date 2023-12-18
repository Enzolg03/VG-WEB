//Funciones

//Carrusel
const header = ["./Imagenes/banner1.jpg","./Imagenes/banner2.jpg","./Imagenes/banner3.jpg"]

var c = 0;
function carrusel(){
    document.getElementById("tres").src = header[c];
    c++;
    if(c >= header.length) c= 0;
    setTimeout("carrusel()",5000);
}

//Social
var social = ["./Imagenes/fb.png","./Imagenes/insta.png","./Imagenes/twit.png"];
var social1 = ["./Imagenes/fb2.png","./Imagenes/insta2.png","./Imagenes/twit2.png"]

function Cambio(e){
    let indice=e.getAttribute("data-i");
    e.src=social1[indice];
}

function Normal(e){
    let indice=e.getAttribute("data-i");
    e.src=social[indice];
}

//Libro
function Agrandar(e){
    e.setAttribute("style","width: 53%; height: 53%; transition: all 0.5s")
}

function Original(e){
    e.setAttribute("style","width: 50%; height: 50%; transition: all 0.5s")
}

//Eventos
document.body.setAttribute("onload","carrusel()")

for(let i=0; i<document.getElementsByClassName("rs").length;i++){
    it=document.getElementsByClassName("rs")[i];
    it.setAttribute("onmouseover","Cambio(this)");
    it.setAttribute("onmouseout","Normal(this)");
}

for(let i=0; i<document.getElementsByClassName("libro").length;i++){
    it=document.getElementsByClassName("libro")[i];
    it.setAttribute("onmouseover","Agrandar(this)");
    it.setAttribute("onmouseout","Original(this)");
}