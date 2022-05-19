var datos=[
    "java",
    "javascript",
    "json",
    "jquery",
    "php",
    "phyton",
    "c",
    "c++",
    "c#",
    "haskell",
    "prolog",
    "lisp",
    "smalltalk",
]

// let result=datos.filter(filtrarArray)
// document.getElementById("result").innerHTML=result

function buscarCallBack() {

    let result=datos.filter(filtrarArray)
    
    document.getElementById("result").innerHTML=result
}

// filter {
//     for (let i = 0; i < datos.length; i++) {
//         filtrarArray(datos[i])
        
//     }
// }

function filtrarArray(dato) {
    // texto ingresado en el input se asigna a variable q
    let q=document.getElementById("q").value 

    // verifico que el texto q este dentro de dato
    // dato es uno de los valores del array
    // let ok=false
    // if (dato.indexOf(q)!=-1) {
    //     ok=true
    // }

    // return ok

    return dato.indexOf(q)!=-1
}