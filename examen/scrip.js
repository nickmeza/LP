function inicio(){
    document.getElementById("Inicio").style.display="block"
    document.getElementById("Ventas").style.display="none";
    document.getElementById("Reporte").style.display="none";
    document.getElementById("Producto").style.display="none";
    document.getElementById("Cliente").style.display="none";
}
function ventas(){
    document.getElementById("Inicio").style.display="none"
    document.getElementById("Ventas").style.display="block";
    document.getElementById("Reporte").style.display="none";
    document.getElementById("Producto").style.display="none";
    document.getElementById("Cliente").style.display="none";
}
function reporte(){
    document.getElementById("Inicio").style.display="none"
    document.getElementById("Ventas").style.display="none";
    document.getElementById("Reporte").style.display="block";
    document.getElementById("Producto").style.display="none";
    document.getElementById("Cliente").style.display="none";
}
function producto(){
    document.getElementById("Inicio").style.display="none"
    document.getElementById("Ventas").style.display="none";
    document.getElementById("Reporte").style.display="none";
    document.getElementById("Producto").style.display="block";
    document.getElementById("Cliente").style.display="none";
}
function cliente(){
    document.getElementById("Inicio").style.display="none"
    document.getElementById("Ventas").style.display="none";
    document.getElementById("Reporte").style.display="none";
    document.getElementById("Producto").style.display="none";
    document.getElementById("Cliente").style.display="block";
}