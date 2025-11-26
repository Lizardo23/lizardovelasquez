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
    alert("Actualizamos el logo. Porque crecer también es verse más guapo");
}
function cambiarFondo(){
     document.getElementById('menu').style.background='#524604ff';
}
function cambiodeTexto(){
    document.getElementById('Subtitulo').textContent="YA LE SE AL JS";
}
function cambiodeTexto1(){
    document.getElementById('titulo1').textContent="¡Bienvenido(a)! Si llegaste por accidente… qué buen accidente";
    alert("Nuevo título… mismo proyecto, más actitud.");
}
function cambiodeTexto2(){
    document.getElementById('titulo2').textContent="Pasa, pasa… la web no muerde";
    alert("Renovamos esa parte de arriba… ya era hora");
}
function cambiarFondo1(){
     document.getElementById('footer').style.background='#ee1313ff';
     alert("Sí, el footer cambió de color. Lo pintamos para que no se sienta ignorado.")
}
function cambiarFondo2(){
     document.getElementById('header').style.background='#b209eaff';
     alert("Fondo nuevo, misma esencia. Pero con más estilo");
}
function cambiarcolortexto(){
    document.getElementById('texto1').style.color='#1af0e5ff';
    document.getElementById('texto2').style.color='#1af0e5ff';
    document.getElementById('texto3').style.color='#1af0e5ff';
    document.getElementById('texto4').style.color='#1af0e5ff';
    document.getElementById('texto5').style.color='#1af0e5ff';
    document.getElementById('texto6').style.color='#1af0e5ff';
    alert("Le dimos color a las letras. Porque el blanco y negro ya estaba muy básico.");
}
function cambiarFondo3(){
     document.getElementById('article').style.background='#4af008ff';
}