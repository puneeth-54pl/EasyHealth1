export default function Contact() {
    return (
        <>
            <section className="contact-section py-5" id="contact"  style={{ backgroundColor: '#e9f5ff' }}>
                <div className="container">
                    <h2 className="text-center mb-4">Get in Touch</h2>
                    <div className="row align-items-center">
                        <div className="col-md-6 mb-4 mb-md-0">
                            <div className="contact-info">
                                <p>
                                    <a href="tel:+918660850822" className="icon-link d-flex align-items-center mb-3">
                                        <i className="bi bi-telephone-fill me-2 text-primary"></i> +91 8660850822
                                    </a>
                                </p>
                                <p>
                                    <a href="mailto:shashi.frds008@gmail.com" className="icon-link d-flex align-items-center mb-3">
                                        <i className="bi bi-envelope-fill me-2 text-primary"></i> shashi.frds008@gmail.com
                                    </a>
                                </p>
                                <p>
                                    <a href="https://www.google.com/maps/place/3rd+Cross+Rd,+Nagar,+Haveri,+Karnataka+581110/" target="_blank" className="icon-link d-flex align-items-center">
                                        <i className="bi bi-geo-alt-fill me-2 text-primary"></i> 3rd cross(west) Vidya Nagar, Behind More Shopping Mall, Haveri 581110
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="map-container" style={{ border: "1px solid #ddd", height: "300px" }}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3857.533832006648!2d75.3926821!3d14.795267800000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb969028f42341d%3A0xd596d8588c4b4202!2s3rd%20Cross%20Rd%2C%20Ashwini%20Nagar%2C%20Haveri%2C%20Karnataka%20581110!5e0!3m2!1sen!2sin!4v1741544333658!5m2!1sen!2sin"
                                    width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true}
                                    loading="lazy">
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
