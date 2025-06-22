export default function Registration() {
    return (
        <>
            <div className="container" id="register-container">
                <h3 className="form-title">Register</h3>
                <form id="register-form">
                    <div className="mb-3">
                        <label htmlFor="register-name" className="form-label">Full Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="register-name"
                            placeholder="Enter your full name"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="register-phone" className="form-label">Mobile Number</label>
                        <input
                            type="tel"
                            className="form-control"
                            id="register-phone"
                            placeholder="Enter your mobile number"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="register-password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="register-password"
                            placeholder="Create a password"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
                <div className="toggle-link">
                    <p>Already have an account? <a href="#" id="show-login">Login here</a></p>
                </div>
            </div>
        </>
    )
}