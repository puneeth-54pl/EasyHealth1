import HeroImg from './Hero.jpg';

export default function Hero() {
    return (
        <section className="hero-section d-flex align-items-center min-vh-100 text-center text-md-start" id="home" style={{ 
            background: 'linear-gradient(135deg, rgba(0, 123, 255, 0.2), rgba(255, 255, 255, 0.9)), url("./Hero.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: '#fff'
        }}>
            <div className="container">
                <div className="row align-items-center">
                    {/* Text Section */}
                    <div className="col-md-6 mb-4 mb-md-0">
                        <h1 className="fw-bold text-primary display-4">Compassionate Care, Modern Solutions</h1>
                        <p className="lead text-muted">
                            Where technology meets compassion — ensuring every patient receives personalized attention and top-notch medical care.
                        </p>
                        <p className="text-muted">
                            Book your appointment now and take the first step towards a healthier tomorrow.
                        </p>
                        <a href="/login" className="btn btn-primary btn-lg shadow mt-3">Book Appointment</a>
                    </div>
                    {/* Image Section */}
                    <div className="col-md-6 text-center">
                        <img src={HeroImg} alt="Healthcare Illustration" className="img-fluid rounded-5 border border-primary shadow-lg" />
                    </div>
                </div>
            </div>
        </section>
    );
}
