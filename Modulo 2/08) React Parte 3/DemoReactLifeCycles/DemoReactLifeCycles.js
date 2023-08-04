// Como es el ciclo de vida de React

// Estados 
// Es un estado donde se guarda la informacion de todo e impacta en el ciclo de vida. Tiene la informacion del componente. Es de uso interno en el componente.
// Cada componente puede tener un estado, pero no es obligación,
// Un componente se actualiza su info cuando se produce cambios en el estado local o recibe nuevas propiedades.
// Atributo onClick es para hacer una accion cuando presionamos un boton.
// Re-renderizado es cuando react se actualiza
// El setState tiene dos parametros. Un objeto, donde se van a colocar las propiedades que voy a modificar, y una callback.
// En componentes funcionales los estados pueden ser cualquier cosa, y en componentes de clases siempre es un objeto
// Es un comportamiento interno

// Las props van hacia abajo
// Los eventos van hacia arriba


// Ciclo de Vida
// Montaje - Actualizacion - Desmontaje

// Montaje ==> la primera vez que vemos el componente en pantalla (componenteDidMount)
// Actualizacion ==> es el re-renderizado(cambia el estado o las propiedas) (componentDidUpdate)
// Desmontaje ==> cuando ya no vemos el componente en pantalla (componentWillUnmount)

// Hooks ==> realiza acciones para los componentes
// Son de uso de componente funcionales
// useState ==> para crear estados. En los componentes funcionales podemos tener la cantidad de estados que quieramos. Para hacer un codigo mas limpio se ponen todas las propiedades dentro de un objeto,
// En el componente de clases tiene que ser un estado y dentro de ese estado un objeto con propiedades. 
// useEffect ==> muestra los ciclos de vida del componente.Primer componente es una callback y el segundo un array de dependencias. En el array de dependencias se coloca de quien depende para hacer el cambio en el estado.
// El console.log muesta el montaje. El return el desmontaje. El array de dependencias la actualizacion.
