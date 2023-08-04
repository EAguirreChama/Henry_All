import { GET_CHARACTERS, GET_CHARACTERS_DETAIL, CLEAN_DETAIL } from "./Action_types";

const initialState = {
    characters: [],
    charactersDetail: {}
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_CHARACTERS:
            return{
                ...state,
                characters: action.payload
            }
        case GET_CHARACTERS_DETAIL:
            return{
                ...state,
                charactersDetail: action.payload
            }
        case CLEAN_DETAIL:
            return{
                ...state,
                charactersDetail: {}
            }

        default:
            return{
                ...state
            }
    }
}

export default reducer;