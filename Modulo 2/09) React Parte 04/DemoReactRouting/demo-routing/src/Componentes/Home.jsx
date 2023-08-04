import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <h1>Componente Home</h1>
            <button>
                <Link to='/about'>About</Link>
            </button>
            <button>
                <Link to='/profile'>Perfil</Link>
            </button>
        </>
    )
}

export default Home;