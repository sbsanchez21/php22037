
window.onload=function () {
    // simulamos datos traídos desde la base de datos
    let listAlumnos=[
        [14, "Jose", "Rodriguez", 25655445],
        [22, "Roxana", "Aizen", 32123321],
        [31, "Nicanor", "Paredes", 25666345],
        [42, "Jacinto", "Chiclana", 25666345],
        [5, "Santos", "Vega", 25666345],
        [6, "Enrique Santos", "Dicepolo", 25666345],
        [27, "Enrique Santos", "Dicepolo", 25666345],
        [8, "Carlos", "Vega", 25666345],
        [9, "Enrique Santos", "Dicepolo", 25666345],
        [10, "Enrique Santos", "Dicepolo", 366556546],
        [11, "Jose", "Antonio", 33555555],
        [12, "Marta", "Gonzalez", 34444455],
    ]

    var body=document.getElementsByTagName("body")[0]

    // tabla
    var table=document.createElement("table")
    table.setAttribute("class", "table table-striped ")
    // table.setAttribute("onclick", "alert('hola')")

    // encabezado
    var thead=document.createElement("thead")
    thead.setAttribute("class", "table-dark")
    var tr=document.createElement("tr")
    // id
    var th=document.createElement("th")
    var texto=document.createTextNode("#ID")
    th.appendChild(texto)
    tr.appendChild(th)
    // nombre
    th=document.createElement("th")
    texto=document.createTextNode("Nombre")
    th.appendChild(texto)
    tr.appendChild(th)
    // apellido
    th=document.createElement("th")
    texto=document.createTextNode("Apellido")
    th.appendChild(texto)
    tr.appendChild(th)    
    // dni
    th=document.createElement("th")
    texto=document.createTextNode("DNI")
    th.appendChild(texto)
    tr.appendChild(th)   
    // operaciones
    th=document.createElement("th")
    texto=document.createTextNode("")
    th.appendChild(texto)
    tr.appendChild(th)     

    thead.appendChild(tr)
    table.appendChild(thead)

    // tbody
    var tbody=document.createElement("tbody")

    // cuerpo de la tabla
    for (let i = 0; i < listAlumnos.length; i++) {
        var tr=document.createElement("tr")
        tr.setAttribute("id", `tr${i}`)

        // id
        var td=document.createElement("td")
        var texto=document.createTextNode(listAlumnos[i][0])
        td.appendChild(texto)
        tr.appendChild(td)

        // nombre
        var td=document.createElement("td")
        var div=document.createElement("div")
        div.setAttribute("id", `txtnom${i}`)
        div.setAttribute("onclick", `habilitarInput('nom${i}')`)
        var texto=document.createTextNode(listAlumnos[i][1])
        div.appendChild(texto)
        td.appendChild(div)
        tr.appendChild(td)

        // apellido
        var td=document.createElement("td")
        var texto=document.createTextNode(listAlumnos[i][2])
        td.appendChild(texto)
        tr.appendChild(td)

        // dni
        var td=document.createElement("td")
        var texto=document.createTextNode(listAlumnos[i][3])
        td.appendChild(texto)
        tr.appendChild(td)       
        
        // operaciones
        var td=document.createElement("td")
        // botón editar
        var iTag=document.createElement("i")
        iTag.setAttribute("class", "fa-solid fa-pen m-1")
        td.appendChild(iTag)
        // botón eliminar
        var iTag=document.createElement("i")
        iTag.setAttribute("class", "fa-solid fa-trash-can m-1")
        iTag.setAttribute("onclick", `eliminarFila('tr${i}')`)
        td.appendChild(iTag)
        tr.appendChild(td)          

        tbody.appendChild(tr)
    }

    table.appendChild(tbody)



    body.appendChild(table)


}

function eliminarFila(id) {
    document.getElementById(id).style.display="none"
}