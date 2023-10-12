import { getCharacters, cleanCharacters} from "../Redux/Action"
import {useDispatch, useSelector} from "react-redux"
import { useEffect } from "react"

const Characters = () => {
    const Dispatch = useDispatch()
    const characters = useSelector(state => state.characters)
    // const {characters} = useSelector(state => state)

    useEffect(() => {
        Dispatch(getCharacters())
        // Limpieza de estado
        return () => Dispatch(cleanCharacters())
    }, [])

    return(
        <div>
            <h1>Characters</h1>
            {
                characters?.map(characters => {
                    return (
                        <div key={characters.id}>
                            <h3>{characters.name}</h3>
                            <img style={{borderRadius: "999999rem"}} src={characters.image}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Characters
