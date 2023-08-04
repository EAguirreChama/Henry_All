import { Link, Outlet } from "react-router-dom";
import { useNavigate, useParams} from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate();

    const params = useParams();

    return (
        <div>
            <h1>Componente Profile</h1>
            <h2>Mi Perfil</h2>

            <button>
                <Link to='person'>Yo</Link>
            </button>

            <button onClick={() => navigate('/')}>
                Atras
            </button>

            <Outlet/>
        </div>
    )
}

export default Profile;