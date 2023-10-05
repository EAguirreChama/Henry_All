// React Router Dom
// Podremos poner toda la info en una sola pagina

// Routing 
// Es cuando dirijimos al usuario a otra URL
// Tenemos que instalar la version 6 de react-router-dom@6.3.0 (siempre indicar la version que quiero instalar)
// Para decirle a la aplicacion que vamos a usar rutas vamos a envolver a App con BrowserRouters en el index

// Atributos del Routing
// path ==> es la ruta que quiero poner(/algo)
// element ==> es el componente que quiero renderizar
// Si ponemos path=":algo" significa que es variable y sea lo que sea que diga despues de los : se va a mostrar ese componente.

// Configuracion
// BrowserRouter ==> permite mostrar todas las rutas
// Routes ==> envuelve toda la ruta
// Route ==> cada ruta(con path y element)

// NavLink ==> Puedo darle estilos
// Link ==> no puedo darle estilos

// Hooks
// useLocation ==> retorna un objeto
// useNavigate ==> permite navegar (se lo usa en los button y se lo usa para no usar Link) Se coloca <button onClick={() => navigate('/')}>
// useParams ==> es un objeto que devuelve la propiedad y su variable de la nav. El nombre que coloco luego de los :
