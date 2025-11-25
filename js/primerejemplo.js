console.log("Hola Mundo");
alert("Hola Mundo, esto es un alert");

function triste(){
    document.getElementById('carita').src='imagenes/sad.png';
    alert("Po que ta triste mano");
}
function feliz(){
    document.getElementById('carita').src='imagenes/happy.png';
}
function cambiarColor(){
    document.getElementById('menu').style.color='#eed33aff';

}
function cambiarLogo(){
    document.getElementById('logo').src='imagenes/logo3.jpg';
}
function cambiarFondo(){
     document.getElementById('menu').style.background='#524604ff';
}
function cambiodeTexto(){
    document.getElementById('Subtitulo').textContent="YA LE SE AL JS";
}
function cambiodeTexto1(){
    document.getElementById('titulo1').textContent="HOLA A TODOS LOS QUE INGRESARON A MI PAGINA "
}
function cambiodeTexto2(){
    document.getElementById('titulo2').textContent="Pasa, pasa… la web no muerde"
}