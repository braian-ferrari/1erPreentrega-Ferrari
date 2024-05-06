import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import styles from './Navbar.module.css';
import LogoNavbar from '../Logo Navbar/LogoNavbar';
import CartWidget from '../CartWidget/CartWidget';

function Navbar() {
    return (
        <nav className={`navbar navbar-expand-lg  ${styles.nav}`}>
            <LogoNavbar />

            <div className="container-fluid">
                <a className="navbar-brand" href="#"></a>
                <button className={`navbar-toggler ${styles.btn}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className={`navbar-toggler ${styles.icono}`}>🏀</span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Calzado
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Hombre</a></li>
                                <li><a className="dropdown-item" href="#">Mujer</a></li>
                                <li><a className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="#">Ninos</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Indumentaria
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Hombre</a></li>
                                <li><a className="dropdown-item" href="#">Mujer</a></li>
                                <li><a className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="#">Ninos</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Marcas
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Adidas</a></li>
                                <li><a className="dropdown-item" href="#">Nike</a></li>
                                <li><a className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="#">Jordan</a></li>
                                <li><a className="dropdown-item" href="#">Under Armour</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link active ${styles.font}`} aria-current="page" href="#">Accesorios</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link active ${styles.font}`} aria-current="page" href="#">Nosotros</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className={`form-control me-2 ${styles.input}`} type="search" placeholder="Buscar" aria-label="Buscar" />
                        <button className="btn btn-outline-info" type="submit">Buscar</button>
                    </form>
                    <div >
                        <CartWidget />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
