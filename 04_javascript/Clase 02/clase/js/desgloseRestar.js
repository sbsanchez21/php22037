var nombre = "Juan Perez";
var pi = 3.14;
// var hoyLlueve = true;

// ejemplo utilización variables
// var hoyLlueve = confirm("Hoy llueve?"); //aceptar hoyLlueve=true, cancelar hoyLlueve=false
// if (hoyLlueve) {
//     document.write("llevar paragüas");
// } else {
//     document.write("No llevar paragüas");
// }

// ejemplo utilización variables
// var edad = prompt("Ingrese su edad");
// if (edad >=18) {
//     document.write("Puede ingresar a la página");
// } else {
//     document.write("NO puede ingresar a la página");
// }

// operadores de comparación
var a = 3;
var b = 4;
var c = 3;

console.log(a==b); //si a==b true
console.log(a==c); //si a==b true

// ejemplo utilización ==
var usu = "pepe@gmail.com";
var pass = 1234;
var usuInput = prompt("ingrese el usuario");
var passInput = prompt("ingrese la password");
if (usuInput==usu && passInput==pass) {
    document.write("Usuario y Pass correctos, ingrese a la página");
} else {
    document.write("Usuario y Pass Incorrectos, No puede ingresar a la página");
}



console.log(a>b);

function restar() {
    console.log("ingresé a la función restar");
    var c = document.getElementById("c").value;
    var d = document.getElementById("d").value;
    var result =  c - d;
    console.log(c);
    console.log(d);
    console.log(result);
    document.getElementById("resultResta").innerHTML = `<br><p style='color:red;'>La resta de ${c} + ${d} = ${result} </p>`;
    // document.getElementById("resultResta").innerHTML  = result; //pone el resultado en el div resultado
}

