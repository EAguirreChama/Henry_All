// https://jsonplaceholder.typicode.com/users

const respuestaHandler =  (respuesta) => {
    const [UsuariodeLista] = $("#UsuariodeLista") //Para que usemos un elemento de la lista

    respuesta.forEach(Usuario => {
        const newLi = document.createElement("li");
        newLi.innerText = Usuario.name
        UsuariodeLista.appendChild(newLi);
    });
}

const [cargarUsuario] = $("#cargarUsuario") //Llamo al boton

const MostrarUsuarios = () => {
    $.get("https://jsonplaceholder.typicode.com/users", respuestaHandler)
}

cargarUsuario.addEventListener("click" , MostrarUsuarios)

