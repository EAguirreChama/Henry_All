import axios from "axios";

// Aca deben declarar las variables donde tengan el action types.
export const GET_ALL_MOVIES = "GET_ALL_MOVIES";
export const GET_MOVIE_DETAILS = "GET_MOVIE_DETAILS";
export const CREATE_MOVIE = "CREATE_MOVIE";
export const DELETE_MOVIE = "DELETE_MOVIE";
export const SEND_EMAIL = "SEND_EMAIL";
// Esten atentos a que los nombres de las variables coincidan.

// Fijarse que la sintaxis de nuestra Action creator es distinta a lo que venimos haciendo. Esto es
// debido al uso del middleware "thunk", el cual nos permite trabajar con acciones asincrónicas.
// Necesitamos hacer uso de este middleware ya que nuestras peticiones al back siempre son asincrónicas,
// por lo tanto, necesitamos ese "delay" para despachar nuestra action hasta que la data nos llegue.
// Vas a tener que usar la funcion "dispatch" recibida en la funcion interna para despachar la action que
// va a llegar a nuestro reducer.
// Acá pueden ver un poco mejor la explicación y algunos ejemplos: https://github.com/reduxjs/redux-thunk
//
// NOTA:
//      Para obtener la informacion del detalle recorda utilizar la ruta http://localhost:3001/movies/:id
//      Usar ruta 'http://localhost:3001/movies' para buscar todas las movies en nuestro back.

// Inicializamos id en 6, para que nuestros próximos ID's no se pisen con los existentes.
// La vas a usar en la funcion createMovie, descomentala cuando te haga falta;
// let id = 6;
// Desde el componente ejecutamos la action creator, pasandole como argumento los values que vamos a utilizar para crear la movie.
// Puedes usar spread operator para copiar el objeto payload.

// 🚨 IMPORTANTE SI USAN PROMESAS HAY QUE RETORNARLAS! LOS TESTS PUEDEN FALLAR SI NO LO HACEN 🚨

export const getAllMovies = () => {
  return function (dispatch) {
    return fetch("http://localhost:3001/movies")
      .then((res) => res.json())
      //data = a un array con objetos, que son las peliculas
      .then((data) => dispatch({ type: GET_ALL_MOVIES, payload: data }));
  };
};

export const getMovieDetail = (id) => {
  return async function (dispatch) {
    const res = await fetch("http://localhost:3001/movies/" + id);
    const data = await res.json();

    //objeto que es esa pelicula que eleji por medio del id
    return dispatch({ type: GET_MOVIE_DETAILS, payload: data });
  };
};

/*
const payload1 = {
        name: "GoodFellas",
        director: "Martin Scorsese",
        releaseYear: 1990,
        description:
          "Young Henry Hill, with his friends Jimmy and Tommy, begins the climb from being a petty criminal to a gangster on the mean streets of New York.",
        image:
          "https://pics.filmaffinity.com/Uno_de_los_nuestros-657659084-large.jpg",
        runningTime: 146,
      };
YA ESTA MODIFICADO
{
        type: CREATE_MOVIE,
        payload: {
          id: 6,
          name: "GoodFellas",
          director: "Martin Scorsese",
          releaseYear: 1990,
          description:
            "Young Henry Hill, with his friends Jimmy and Tommy, begins the climb from being a petty criminal to a gangster on the mean streets of New York.",
          image:
            "https://pics.filmaffinity.com/Uno_de_los_nuestros-657659084-large.jpg",
          runningTime: 146,
        },
      }*/
let id = 5;
export const createMovie = (newMovie) => {
  //aca incrementa cada vez que se ejecute la funcion
  id++;
  const payload = { ...newMovie, id };
  return { type: CREATE_MOVIE, payload };
};

// Desde el componente ejecutamos la action creator, pasandole como argumento el id de la movie que queremos eliminar.
export const deleteMovie = (payload) => {
  return { type: DELETE_MOVIE, payload };
};

// Desde el componente ejecutamos la action creator, pasandole como argumento los values que vamos a utilizar para enviar el form de contacto.
export const sendEmail = (payload) => {
  //mi payload es un objeto
  return {
    type: SEND_EMAIL,
    payload
  };
};
