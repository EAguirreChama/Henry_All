// Framework Css ==> conjunto de estilos predefinidos para realizar una interfaz de usuario

// A tener en cuenta
// 1rem son 16px


// Estilos
// background-color ==> para cambiar el fondo del boton
// color ==> para cambiar el color de las letas
// border ==> para cambiar el color del borde
// border-radius ==> para cambiar el tamaño del borde (en rem)
// font-weight ==> estilo de la letra
// font-size ==> tamaño de la letra (en rem)
// padding ==> el espaciado del relleno (en rem)
// cursor: pointer ==> para que aparezca la manito en el boton
// transition ==> transicion de un estilo a otro (. y la cantidad de segundos) (siempre en el general)
// width ==> ancho
// calc(100vw - 16rem) ==> para calcular el ancho de la pantalla (como quiero que sea la pantalla general)

// @media screen and (min - width: 720px){que vamos a modificar{width: "...px"}} (Para modificar segun la pantalla)

// Antes de los dos puntos va el nombre del estilo que se quiere modificar
// :hover ==> hace de que cambien los estilos cuando se posicionan en el boton (dentro se ponen los estilos que se quiere cambiar) 

// :root {} ==> para ponerle estilos a toda la pantalla en general


// Bootstrap ==> nos permite agregar estilos sin tener que hacerlo de forma manual (se necesita agregar el link al index)

// Css Media Queries (Todo dentro de una etiqueta styles)
// body (es la pantalla completa) 
// Luego se puede poner 
// margin ==> cuanto espacio queremos entre el contenido y la pantalla (en rem)

// Grid System ==> agarra la pantalla y la divide simetricamente (siempre son 12 columnas)


// Css Preprocessors
// Less ==> nos traduce todo a css puro
// Para importar ==> @import "nombre"
// Para definir una variable de algo ==> @nombre: #algo
// Para hacer una extension ==> &:entend (.clase)