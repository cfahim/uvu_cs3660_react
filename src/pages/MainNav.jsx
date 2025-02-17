import { useContext, React } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa"; // Import FontAwesome icon
import { AuthContext } from "../context/AuthContext";

const WORDPRESS_IMAGES = {
    uvulogo: "https://www.prof-fahim.online/cs3660wp/wp-content/uploads/2025/01/utah-valley-university.svg",
};

const MainNav = () => {
    const { isLoggedIn, token, logout } = useContext(AuthContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={WORDPRESS_IMAGES.uvulogo} alt="Logo" width="75" height="24" className="d-inline-block" />
                    <span className="ms-2">Demo React App</span>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/bootstrap">
                                Bootstrap Demo
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">
                                Contact
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/events">
                                Events
                            </Link>
                        </li>
                    </ul>
                    <div className="ms-auto">
                        {isLoggedIn ? (
                            <div className="d-flex align-items-center">
                                <FaUserCircle size={24} className="me-3" title={token?.username} />
                                <span className="text-white me-2">{token?.username}</span>
                                <button className="btn btn-danger" onClick={logout}>
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <Link className="nav-link text-white" to="/login">
                                <FaUserCircle size={24} className="me-3" title="Login" />
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default MainNav;
