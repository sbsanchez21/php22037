var a=3
var b=5

function restar() {
    console.log(`a-b=${a-b}`)
}

restar()
a=8
restar()

//funciones con parámetros
function suma(a,b) {
    console.log(`a+b=${a+b}`)
}
let c=34
let d=44
suma(c,d)

let sueldo=100000
let aument=3000
suma(sueldo,aument)


function hacerEjercicio(a, mensaje) {
    console.log(`Hacer ${a} veces ${mensaje}`);
}
hacerEjercicio(3, "flexiones de brazo");
hacerEjercicio(5, "sentadillas");


// funcions que devuelven un valor
function raizCuadrada(x) {
    return Math.sqrt(x)
}

let raiz = raizCuadrada(16)
console.log(`La raíz cuadrada de 16 es ${raiz}`)
raiz *= 2;
console.log(`${raiz}`)

// funcion flecha, manera abreviada de escribir una función
function sumar(a,b) {
    return a+b;
}
let resultSuma = sumar(3,5)
console.log(resultSuma)

var sumaFlecha = (a,b) => a+b
resultSuma=sumaFlecha(3,5)
console.log(resultSuma)

// arrays o vectores
var car1="Renault"
var car2="Volvo"
var car3="Fiat"

var cars=["Renault","Volvo","Fiat","Mercedes", "Peugeot"]
console.log(cars[3]) //como acceder a un elemento
cars[3]="Mercedes Benz" //modificar un valor
console.log(cars[3]) //como acceder a un elemento

console.log(cars)
cars.sort()
console.log(cars)
cars.pop()
console.log(cars)
cars.push("BMW")
console.log(cars)
cars.reverse()
console.log(cars)

var sueldos  = [70000, 50000, 60000, 45000]
// sueldos.sort()
console.log(sueldos)

// aumentar el sueldo en $5000
const aumento = 5000
for (let i = 0; i < sueldos.length; i++) {
    sueldos[i]+=aumento
    console.log(sueldos[i])
}

// matrices, arrays bidimensionales, existen arrays multidimensionales
var butacasID = [
    ["F1A1", "F1A2", "F1A3"], 
    ["F2A1", "F2A2", "F2A3"], 
    ["F3A1", "F3A2", "F3A3"], 
    ["F4A1", "F4A2", "F4A3"], 
    ]

var butacasLibres = [
    [true, true, true], 
    [true, false, true], 
    [false, true, true], 
    [true, true, false], 
    ]    

console.log(butacasID)    
console.log(butacasID[2][1])

console.log(`La butaca ${butacasID[1][1]} está libre? ${butacasLibres[1][1]}`)


for (let i = 0; i < butacasID.length; i++) {
    for (let j = 0; j < butacasID[0].length; j++) {
        console.log(`La butaca ${butacasID[i][j]} está libre? ${butacasLibres[i][j]}`)
    }
}


// foreach: llama a una función por cada elemento del array
sueldos  = [70000, 50000, 60000, 45000]
sueldos.forEach(aumentarSueldo) //callback

function aumentarSueldo(elemento, i) {
    elemento+=3000
    console.log(`Se aumento a $${elemento} al empleado ${i}`)
}

// every determina si todos los elementos satisfacen una condición
var edades = [23, 44, 16, 13, 55]

function esMayorEdad(elemento) {
    return elemento >= 18;
}

console.log(edades.every(esMayorEdad)) //verifica que todos los elementos del array cumplan con la condición esMayorEdad
console.log(edades.some(esMayorEdad)) //da verdadero si algun elemento cumple con esMayorEdad

console.log(edades.filter(esMayorEdad))
console.log(edades.map(Math.sqrt))

console.log(edades.map(duplicar))
function duplicar(elemento) {
    return elemento*=2
}
