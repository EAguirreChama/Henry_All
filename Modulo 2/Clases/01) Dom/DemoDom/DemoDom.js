// Selectores
// Se utilizan en la consola del navegador

// document.getElementById          ("Nombre del id")         ==> Nos trae un elemento por su id.
// document.getElementsByClassName  ("Nombre de la Clase")    ==> Nos trae los elementos con el nombre de esa clase. Retorna un array.
// document.getElementsByTagsName   ("Nombre de la Etiqueta") ==> Nos retorna un array con los nombres de todas las etiquetas.
// document.querySelectorAll        ("Nombre de lo que sea")  ==> Retorna lo que se pida.
// document.querySelector           ("Nombre")                ==> Retorna un elemento que se pida (#ParaId , .ParaClases , )


// Metodos
// .innerHtml   ==> Permite saber el texto de una etiqueta. Tambien nos permite modificar el texto, pero no para siempre.
// .innerText   ==> Permite saber el texto de una etiqueta.
// .appendChild ==> Permite agregar una accion a un elemento


// Eventos
// NombreDelElemento.addEventListener("click", function(){})

const clickHandler = function () {
    const contenedor = document.querySelector("#Contenedor")

    const NewDiv = document.createElement("div")
    NewDiv.innerText = "Hola capo"
    NewDiv.className = "recuadro"
    NewDiv.addEventListener("click", cambiarColor)

    contenedor.appendChild(NewDiv)
}

const buttonAgregar = document.querySelector("#Agregar")
buttonAgregar.addEventListener("click", clickHandler)

const cambiarColor = function (event) {
    const elemento = event.target
    if(elemento.className === "recuadro"){
        elemento.className = "recuadro2"
    } else {
        elemento.className = "recuadro"
    }
}
