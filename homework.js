function verde(){
    document.getElementById("palabra").classList.remove("rojo","naranja","azul","amarillo","morado","gris");
    document.getElementById("palabra").classList.add("verde");
}
function naranja(){
    document.getElementById("palabra").classList.remove("verde","rojo","azul","amarillo","morado","gris");
    document.getElementById("palabra").classList.add("naranja");
}
function azul(){
    document.getElementById("palabra").classList.remove("verde","rojo","naranja","amarillo","morado","gris");
    document.getElementById("palabra").classList.add("azul");
}
function morado(){
    document.getElementById("palabra").classList.remove("verde","rojo","naranja","amarillo","gris");
    document.getElementById("palabra").classList.add("morado");
}
function amarillo(){
    document.getElementById("palabra").classList.remove("verde","rojo","naranja","morado","gris");
    document.getElementById("palabra").classList.add("amarillo");
}
function gris(){
    document.getElementById("palabra").classList.remove("verde","rojo","naranja","morado","amarillo");
    document.getElementById("palabra").classList.add("gris");
}