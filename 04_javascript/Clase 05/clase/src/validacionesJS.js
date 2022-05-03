function validarMail() {
    let mail = document.getElementById("correo").value; //trae el valor ingresado en el input del e-mail

    console.log(`mail=${mail}`);

    if (mail != "" && mail.indexOf("@cursoPHP.com.ar") != -1 ) {
        // console.log("El e-mail es válido")
        document.getElementById("mensajes").innerHTML ="El e-mail es válido"
        document.getElementById("mensajes").style.backgroundColor = "lightblue"
        document.getElementById("correo").style.backgroundColor = ""
    } else {
        // console.log("El e-mail es Inválido")
        document.getElementById("mensajes").innerHTML = "El e-mail es Inválido"
        document.getElementById("mensajes").style.backgroundColor = "lightcoral"
        document.getElementById("correo").style.backgroundColor = "red"
    }
}

function validar8Char() {
    let ochoChar = document.getElementById("8Char").value
    console.log(ochoChar);

    if (ochoChar.length >= 8) {
        document.getElementById("mensajes").innerHTML ="La respuesta  es válida"
        document.getElementById("mensajes").style.backgroundColor = "lightblue"
        document.getElementById("8Char").style.backgroundColor = ""

    } else {
        document.getElementById("mensajes").innerHTML ="La respuesta debe tener al menos 8 caractéres"
        document.getElementById("mensajes").style.backgroundColor = "lightcoral"
        document.getElementById("8Char").style.backgroundColor = "red"
    }
}

function validarFortaleza() {
    let contra = document.getElementById("contra").value
    console.log(contra)
    console.log(contra.length)

    let seguridad
    let color

    if(contra.length >=0 && contra.length <=4) {
        seguridad="Baja"
        color="lightcoral"
    } else if (contra.length >=5 && contra.length <=9) {
        seguridad="Media"
        color="lightgreen"
    } else if(contra.length >= 10){
        seguridad="Alta"
        color="lightblue"
    }

    document.getElementById("msjFortaleza").innerHTML = seguridad
    document.getElementById("msjFortaleza").style.backgroundColor = color
}