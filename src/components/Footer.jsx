export default function Footer() {
    return (
        <footer className="footer bg-dark text-white py-4">
            <div className="container">
                <div className="row text-center">
                    {/* Doctor Info */}
                    <div className="col-md-4 mb-4 mb-md-0">
                        <h5 className="fw-bold">Dr. Shashidhar S H</h5>
                        <p className="text-white">Anaesthesiologist</p>
                        <div className="social-icons d-flex justify-content-center">
                            <a 
                                href="https://www.instagram.com/shashi.frds007/profilecard/?igsh=MTE1YzY0N2llNWhjZQ==" 
                                className="icon-link text-white me-3"
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label="Instagram">
                                <i className="bi bi-instagram fs-4"></i>
                            </a>
                        </div>
                    </div>

                    {/* Useful Links */}
                    <div className="col-md-4 mb-4 mb-md-0">
                        <h5 className="fw-bold">Useful Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#home" className="text-white text-decoration-none">Home</a></li>
                            <li><a href="#about" className="text-white text-decoration-none">About</a></li>
                            <li><a href="#services" className="text-white text-decoration-none">Services</a></li>
                        </ul>
                    </div>

                    {/* Credits */}
                    <div className="col-md-4">
                        <h5 className="fw-bold">Designed & Developed by</h5>
                        <p className="text-white">Parineeth | Puneeth | Vishnu</p>
                    </div>
                </div>
                {/* Copyright */}
                <p className="text-center mt-4 text-white">© 2025 Easy Health</p>
            </div>
        </footer>
    );
}
