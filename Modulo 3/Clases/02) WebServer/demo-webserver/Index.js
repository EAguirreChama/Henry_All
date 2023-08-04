// Para crear un servidor hay que traer el modulo de HTTP
const http = require('http');

http
.createServer((request, response) => {
    // console.log('Algo ha pasado aquí');

    // response.writeHead(200, { 
    //     "Content-type": "text/plain" })
    // response.end("Hola! Creaste tu primer server")

    if(request.url === "/"){
        response.writeHead(200,
            {"Content-type": "text/plain"})
        return response.end("Esta es el inicio")
    }

    if(request.url === '/users'){
        response.writeHead(200,
            {"Content-type": "application/json"})
        
        const users = [
            {id:1, name: "Ernesto"},
            {id:2, name: "Fabrizio"},
            {id:3, name: "Alejo"},
            {id:4, name: "Ignacio"}
        ]
        return response.end(JSON.stringify(users))
    }
    if(request.url === '/posteos'){
        response.writeHead(200,
            {"Content-type": "text/plain"})
        return response.end("Esta ruta es para los posteos")
    }
    else {
        response.writeHead(404,
            {"Content-type": "text/plain"})
        return response.end("Error: no entraste a nada puto")
    }
})
.listen(3005, "localhost")