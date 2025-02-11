import React from "react";
import { Link } from "react-router-dom";
import uvuLogo from '../assets/utah-valley-university.svg';

const WORDPRESS_IMAGES = {
    uvulogo: "https://www.prof-fahim.online/cs3660wp/wp-content/uploads/2025/01/utah-valley-university.svg",
};

const MainNav = () => {
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
                </div>
            </div>
        </nav>
    );
};

export default MainNav;
