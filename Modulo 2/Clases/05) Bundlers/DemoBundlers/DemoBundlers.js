// Modulos ==> es un codigo que realiza una determinada tarea. UNA UNICA TAREA POR MODULO

// CommonJs ==> es cuando exportamos una info con module.exports = {} y la recibimos en otro lugar con require("ubicacion de la info")

// Si tenemos más constantes y no las exportamos/importamos no se rompe el codigo.

// Se puede exportar e importar cualquier cosa

// Siempre la info disponible es un objeto

// Mi archivo funciones y constantes son totalmente independientes porque no importamos nada, solo damos informacion a index (donde se importa toda la info y se realizan las acciones)

// Si ponemos export default siempre que llamemos a un archivo nos va a traer el default en el objeto. 

// Solo podemos tener un archivo por default

// Si yo no hago destructuring me trae lo que tengo por default

// Cuando instalamos dependencias se nos crea la carpeta node_modules y la propieda dependecies que muestra todo lo que instalamos

// WebPack ==> para que funcione lo que hicimos en la Tercera forma
// Se encarga de traer toda la informacion en un solo archivo para importar en el html
// Para utilizar webpack debemos instalar webpack ; webpack-cli
// React ya tiene incorporado webpack
// En el packjson se crea abajo de start (build: "webpack")
// Siempre que lo utilizo, si cambio algo en los archivos debo poner npm run build

