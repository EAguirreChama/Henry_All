import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCharactersDetail, cleanDetail} from "../Redux/Action";

const Detail = () => {
    const dispatch = useDispatch();
    const charactersDetail = useSelector(state => state.charactersDetail)
    const {id} = useParams();

    useEffect(() => {
        dispatch(getCharactersDetail(id))

        return () => dispatch(cleanDetail())
    }, [id, dispatch])

    return (
        <div>
            <h1>{charactersDetail.name}</h1>
            {/* <img src={Imagen}/> */}
            {charactersDetail.Historia && <p>Historia: {charactersDetail.Historia}</p>}
        </div>
    )
}

export default Detail;