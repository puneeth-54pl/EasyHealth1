import AboutImg from './About.jpeg'
import Certificate1 from './certificate1.jpeg'
import Certificate2 from './mbbs.jpg'
import Certificate3 from './diploma.jpeg'

export default function About() {
    return (
        <>
            <section className="doctor-about-me" id="about" style={{ background: '#f0f8ff' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="doctor-image">
                                <img src={AboutImg} alt="Doctor" className="img-fluid rounded shadow" style={{ borderRadius: '1.5rem' }} />
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="doctor-details">
                                <h2 className="doctor-name">Dr. Shashidhar S H</h2>
                                <p className="doctor-profession">Anaesthesiologist</p>
                                <p className="doctor-background"><strong>Professional Background:</strong></p>
                                <p className="doctor-background-description">
                                    Dr. Shashidhar completed his MBBS and Diploma in Anaesthesiology from Rajiv Gandhi University of Health Sciences and has over 3 years of experience in the medical field, specializing in anaesthesiology. He has worked at prestigious hospitals and is dedicated to providing exceptional care to his patients.
                                </p>
                                <p className="doctor-care-philosophy"><strong>Philosophy of Care:</strong></p>
                                <p className="care-philosophy-description">
                                    Dr. Shashidhar believes in a patient-centered approach, emphasizing open communication and collaboration with patients to ensure the best possible outcomes. He treats each patient as an individual and tailors his care to meet their specific needs and goals.
                                </p>

                                {/* <!-- Button to Trigger Modal --> */}
                                <button type="button" className="btn btn-primary mt-3" data-bs-toggle="modal" data-bs-target="#certModal">
                                    View Certifications
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Bootstrap Modal --> */}
                <div className="modal fade" id="certModal" tabIndex="-1" aria-labelledby="certModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="certModalLabel">Certifications</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div id="certCarousel" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src={Certificate1} className="d-block w-100" alt="Certification 1"/>
                                        </div>
                                        <div className="carousel-item">
                                            <img src={Certificate2} className="d-block w-100" alt="Certification 2"/>
                                        </div>
                                        <div className="carousel-item">
                                            <img src={Certificate3} className="d-block w-100" alt="Certification 3"/>
                                        </div>
                                    </div>
                                    {/* Carousel Controls */}
                                    <button className="carousel-control-prev" type="button" data-bs-target="#certCarousel" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon bg-dark rounded-circle" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#certCarousel" data-bs-slide="next">
                                        <span className="carousel-control-next-icon bg-dark rounded-circle" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
