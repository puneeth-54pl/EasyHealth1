export default function Services() {
    return (
        <section id="services" className="services-section py-5 bg-light">
            <div className="container">
                {/* Section Header */}
                <div className="text-center mb-5">
                    <h2 className="section-title text-primary fw-bold">Our Services</h2>
                    <p className="section-description text-muted">
                        Comprehensive healthcare services tailored to ensure your well-being.
                    </p>
                </div>

                {/* Service Cards */}
                <div className="row g-4">
                    {/* Service 1: General Checkups */}
                    <div className="col-md-6 col-lg-4">
                        <div className="card border-0 shadow-sm h-100 text-center p-4">
                            <i className="fa fa-stethoscope service-icon text-primary fs-1 mb-3"></i>
                            <h4 className="fw-bold">General Checkups</h4>
                            <p className="text-muted">
                                Regular health checkups to monitor your overall health and well-being.
                            </p>
                        </div>
                    </div>

                    {/* Service 2: Anaesthesiology */}
                    <div className="col-md-6 col-lg-4">
                        <div className="card border-0 shadow-sm h-100 text-center p-4">
                            <i className="fa fa-syringe service-icon text-primary fs-1 mb-3"></i>
                            <h4 className="fw-bold">Anaesthesiology</h4>
                            <p className="text-muted">
                                Safe and effective anesthesia care for surgeries and medical procedures.
                            </p>
                        </div>
                    </div>

                    {/* Service 3: Pain Management */}
                    <div className="col-md-6 col-lg-4">
                        <div className="card border-0 shadow-sm h-100 text-center p-4">
                            <i className="fa fa-medkit service-icon text-primary fs-1 mb-3"></i>
                            <h4 className="fw-bold">Pain Management</h4>
                            <p className="text-muted">
                                Personalized pain management plans to improve quality of life.
                            </p>
                        </div>
                    </div>

                    {/* Service 4: Pre-Surgery Consultation */}
                    <div className="col-md-6 col-lg-4">
                        <div className="card border-0 shadow-sm h-100 text-center p-4">
                            <i className="fa fa-user-md service-icon text-primary fs-1 mb-3"></i>
                            <h4 className="fw-bold">Pre-Surgery Consultation</h4>
                            <p className="text-muted">
                                Expert consultation to prepare you before surgical procedures.
                            </p>
                        </div>
                    </div>

                    {/* Service 5: Post-Surgery Care */}
                    <div className="col-md-6 col-lg-4">
                        <div className="card border-0 shadow-sm h-100 text-center p-4">
                            <i className="fa fa-heartbeat service-icon text-primary fs-1 mb-3"></i>
                            <h4 className="fw-bold">Post-Surgery Care</h4>
                            <p className="text-muted">
                                Dedicated care to ensure a smooth recovery post-surgery.
                            </p>
                        </div>
                    </div>

                    {/* Service 6: Emergency Care */}
                    <div className="col-md-6 col-lg-4">
                        <div className="card border-0 shadow-sm h-100 text-center p-4">
                            <i className="fa fa-ambulance service-icon text-primary fs-1 mb-3"></i>
                            <h4 className="fw-bold">Emergency Care</h4>
                            <p className="text-muted">
                                Immediate medical attention during emergencies, 24/7.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
