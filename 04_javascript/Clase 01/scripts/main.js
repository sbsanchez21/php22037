var nroVisitantes = 2;

const miTitulo = document.querySelector('h1');
miTitulo.textContent = '¡Hola mundo!';

/** nombre de variables */
var nombreApellido;
var nombre_apellido;
var numero1;
var nombreapellido; //dificultad lectura
var razoSocial;
var RazonSocial; // no es camel case

let numero;


// window.onload = function() {
//     // Para internet Explorer
//     document.onselectstart = function(){return false;} 
//     // Para Firefox
//     document.onmousedown = function(){return false;}
//     nroVisitantes = 4;
// }
/**
document.body.oncopy = function() {
    alert('Todos los derechos reservados. © 2019');
    return false;};
  */ 

/** alcance global o local 
for(let i=0; i<3; i++) {
    // en este caso, la variable i sólo existe dentro del bucle for
    alert(i);
}*/

function sumar() {
    let a=document.getElementById('a').value; 
    let b=document.getElementById('b').value;
    let resultado = parseFloat(a) + parseFloat(b);
    document.getElementById('resultado').innerHTML= parseFloat(a) + ' más ' + parseFloat(b) + ' es igual: ' + resultado;

    var resultNumber = Number(a) + Number(b);
    document.getElementById('resultNumber').innerHTML=`${a} más ${b} es igual a ${resultNumber}`;
    var nombreApellido = "Pedro Suarez";
    var nroAfiliados = 2;
    nroVisitantes = 3;
}

function alerta () {
    alert("link activado");
}

function alertaSalir() {
    confirm("Desea salir de la página");

}

function mayor18 () {
    var ok = confirm("Es mayor de 18 años");
    if (ok) {
        window.open('http://www.google.com');
    } else {
        document.write("  Cancelado");
    }  
}