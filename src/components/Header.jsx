import { Link } from "react-router-dom";

const Header = () => {

    const darkMode = () => {
        document.documentElement.classList.toggle('dark-theme');
        // const btn = document.getElementById('btn');
        // console.log(btn);
        // btn.className = 'btn btn-light'
    }

    return(
        <header>
            <nav className="navbar navbar-expand-md">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">App</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Pokemon</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/Searchpokemon">Search pokemon</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/AppEjemplo">App Ejemplo</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/Flags">Flags</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/pixabay">Pixabay</Link>
                        </li>
                        <li>
                            <button className="btn" onClick={darkMode}><ion-icon name="moon-outline"></ion-icon></button>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;