module.exports = {
    // Este es el entry point
    entry: "./index.js", 
    output: {
        path:__dirname + "/browser", // Quiero que se cree una carpeta con este nombre
        filename: "bundle.js" // Dentro de la carpeta quiero un archivo con este nombre
    }
}