import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <div>
            <h1>Haz Click para Ingresar</h1>
            <button>
                <Link to="/login">Ingresar</Link>
            </button>
        </div>
    )
}

export default Landing;