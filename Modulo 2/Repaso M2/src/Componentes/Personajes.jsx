import { useEffect } from "react"
import { useDispatch, useSelector} from "react-redux"
import { getCharacters } from "../Redux/Action";
import Personaje from "./Personaje";

const Personajes = () => {
    const dispatch = useDispatch();
    const characters = useSelector(state => state.docs)

    useEffect(() => {
        dispatch(getCharacters())
    }, [characters, dispatch])

    return (
        <div>
            <h1>Personajes</h1>
            {
                characters.map(char => {
                    return (
                        <Personaje 
                        key={char._id}
                        name={char.Nombre}
                        image={char.Imagen}
                        id={char._id}
                        />
                    )
                })
            }
        </div>
    )
}

export default Personajes