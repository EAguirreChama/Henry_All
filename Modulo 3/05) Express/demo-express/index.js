// Servidor con Http
// const http = require("http")

// http
// .createServer((req, res) => {
//     if(req.url === "/"){
//         res
//         .writeHead(200, {"Content-type": "text/plain"})
//         .end("Hola, me crearon con Http")
//     }
// })
// .listen(3001, "localhost")

// Servidor con express
const express = require("express");
const server = express();
const morgan = require("morgan");

// Para usar el middleware
server.use(morgan("dev"))

server.get("/", (req, res) => {
    res.send("Esta ruta fue creada con express")
})

server.get("/ussers/:id/:name", (req, res) => {
    // res.send("Esta ruta fue creada para usuarios")
    const { id, name } = req.params

    if(+id === 23 && name === "Dai"){  
        const infoUser = {
            cohorte: "37a",
            name: "Dai",
            id: 23,
            alumnos: "Muchos pelotudos"
        }
    
        return res.json(infoUser)
    }

    return res.status(404).send("Hubo un error mi raid")
})

server.get("/usser", (req, res) => {
    const { name } = req.query;

    if(name){
        res.send(`me mandaron este name: ${name}`)
    }
    return res.send("No hay name, pero igual funciono")
})

const users = []
let id = 0;
server.post("/posteo", (req, res) => {
    console.log(req.body)
    const {name, alumnos} = req.body

    const newUser = {
        id: ++id,
        name,
        alumnos
    }

    users.push(newUser)

    res.json(users)
})

server.listen(3001, () => {
    console.log("Server listen on port 3001")
})
