var colorDePerfil = document.getElementById("perfil").style.backgroundColor;
var boton = document.getElementById("prueba").addEventListener('click', function () {
    if (colorDePerfil === 'green') {
        document.getElementById("perfil").style.backgroundColor = 'blue';
    } else {
        document.getElementById("perfil").style.backgroundColor = 'green';
    }
    colorDePerfil = document.getElementById("perfil").style.backgroundColor;

});
