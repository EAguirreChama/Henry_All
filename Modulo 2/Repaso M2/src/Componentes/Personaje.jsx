import { Link } from "react-router-dom";
const Personaje = ({id, name, image}) => {
    return (
        <div>
            <Link to={`/detail/${id}`}>
              <h2>{name}</h2>
            </Link>
            <img src={image} alt={name}></img>
        </div>
    )
}

export default Personaje;