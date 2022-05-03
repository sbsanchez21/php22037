function validarMail() {
    let email=document.getElementById("email").value 

    if (email=="" || email.indexOf("@")==-1 || email.indexOf("codoACodo.edu.ar")==-1) {
        document.getElementById("mensajes").innerHTML="Email incorrecto"
        document.getElementById("mensajes").style.backgroundColor="red"
    } else {
        document.getElementById("mensajes").innerHTML="Email Correcto"
        document.getElementById("mensajes").style.backgroundColor="lightblue"
        
    }
}

function updFortaleza() {
    let pass=document.getElementById("pass").value
    let fortaleza;
    let color

    if (pass.length > 0 && pass.length <4  ) {
        fortaleza="10%"
        color="red"
    } else if(pass.length >= 4 && pass.length <8  ) {
        fortaleza="50%"
        color="lightblue"
       
    } else {
        fortaleza="90%"
        color="green"
    }

    document.getElementById("fortaleza").innerHTML=fortaleza
    document.getElementById("fortaleza").style.color=color

}