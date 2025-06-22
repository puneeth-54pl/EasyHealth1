import { useEffect, useState } from "react";

export default function Navbar() {
    const [user, setUser] = useState(null);
    const token = localStorage.getItem("token");

    // Fetch user once on mount
    useEffect(() => {
        if (token) setUser(localStorage.getItem("username"));
    }, [token]);

    // Logout function
    const handleLogout = () => {
        localStorage.clear();
        window.location.href = "/home"; // Redirect to login page
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light sticky-top shadow-sm bg-white">
            <div className="container-fluid">
                {/* Brand Name */}
                <a className="navbar-brand fw-bold ms-4" href="#home">EasyHealth</a>

                {/* Mobile Toggler */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navigation Links */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto text-center">
                        <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
                        <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                        <li className="nav-item"><a className="nav-link" href="#contact">Contact Me</a></li>

                        {token ? (
                            <>
                                <li className="nav-item"><a className="nav-link" href="#my-bookings">My Bookings</a></li>

                                {/* User Dropdown */}
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle d-flex align-items-center"
                                        href="#"
                                        id="userDropdown"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <i className="fas fa-user me-2"></i> {user}
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                                        <li>
                                            <button className="dropdown-item text-danger" onClick={handleLogout}>Logout</button>
                                        </li>
                                    </ul>
                                </li>
                            </>
                        ) : (
                            <li className="nav-item">
                                <a className="btn btn-primary" href="/login">Login</a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
