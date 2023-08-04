// Importa las action types acá
import {
  GET_ALL_MOVIES,
  CREATE_MOVIE,
  DELETE_MOVIE,
  GET_MOVIE_DETAILS,
  SEND_EMAIL,
} from "../actions/index";

const initialState = {
  movies: [],
  movieDetail: {},
  email: {},
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // Acá va tu código:
    case GET_ALL_MOVIES:
      return { ...state, movies: payload };
    //---------

    case CREATE_MOVIE:
      return { ...state, movies: [...state.movies, payload] };
    //---------
    case DELETE_MOVIE:
      let peliculasSinBorrar = state.movies.filter(cadaPelicula => cadaPelicula.id !== payload);
      return { ...state, movies: peliculasSinBorrar };

    //---------
    case GET_MOVIE_DETAILS:
      return {...state, movieDetail: payload}

    //---------
    case SEND_EMAIL:
      return  {...state, email: payload}

    //---------
    default:
      return initialState;
  }
};

export default rootReducer;
