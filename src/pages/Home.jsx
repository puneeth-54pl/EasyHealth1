import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Appointment from "../components/Appointment";
import Hero from "../components/Hero";
import Bookings from "../components/Bookings";
import "./Home.css";

export default function Home() {
    // State variables to handle the form and login status
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [bookingDate, setBookingDate] = useState('');
    const [notes, setNotes] = useState('');
    const [message, setMessage] = useState('');

    // Check if the user is logged in on component mount
    useEffect(() => {
        const userId = localStorage.getItem("user_id");
        setIsLoggedIn(!!userId);  // Set isLoggedIn state based on user_id in localStorage
    }, []);

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Basic validation to check if all required fields are filled
        if (!name || !age || !gender || !bookingDate) {
            setMessage('Please fill out all required fields.');
            return;
        }
    
        try {
            const response = await fetch('http://localhost:3000/book-appointment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    age,
                    gender,
                    bookingDate,
                    notes,
                    user_id: localStorage.getItem("user_id")  // Assuming user_id is stored in localStorage
                })
            });
    
            if (response.ok) {
                const data = await response.json();
                setMessage(data.message);
                // Clear form after successful submission
                setName('');
                setAge('');
                setGender('');
                setBookingDate('');
                setNotes('');
            } else {
                setMessage('Failed to book appointment.');
            }
        } catch (error) {
            console.error('Error booking appointment:', error);
            setMessage('An error occurred. Please try again.');
        }
    };
    

    return (
        <div className="home-container">
            {/* Navbar and Hero are shown regardless of login */}
            <Navbar />
            <Hero />
            <Services />
            <About />

            {/* Conditionally render components based on login state */}
            {isLoggedIn ? (
                // Render these components only if the user is logged in
                <>
                    <Bookings />
                    <section className="appointment-section py-5" id="bookappointment" style={{ backgroundColor: '#e9f5ff' }}>
                        <div className="container">
                            <h2 className="text-center mb-4">Make an Appointment</h2>
                            <form onSubmit={handleSubmit} className="bg-white p-4 shadow rounded">
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input type="text" id="name" className="form-control" value={name} onChange={e => setName(e.target.value)} required />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="age" className="form-label">Age</label>
                                        <input type="number" id="age" className="form-control" value={age} onChange={e => setAge(e.target.value)} required />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="gender" className="form-label">Gender</label>
                                        <select id="gender" className="form-select" value={gender} onChange={e => setGender(e.target.value)} required>
                                            <option value="">Select Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="bookingDate" className="form-label">Booking Date</label>
                                        <input type="date" id="bookingDate" className="form-control" value={bookingDate} min={new Date().toISOString().split('T')[0]} onChange={e => setBookingDate(e.target.value)} required />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="additionalNotes" className="form-label">Additional Notes</label>
                                        <textarea id="additionalNotes" className="form-control" rows="4" value={notes} onChange={e => setNotes(e.target.value)}></textarea>
                                    </div>
                                    <div className="col-12 text-center">
                                        <button type="submit" className="btn btn-primary">Take Appointment</button>
                                    </div>
                                </div>
                            </form>
                            {message && <p className="mt-3 alert alert-info text-center">{message}</p>}
                        </div>
                    </section>
                </>
            ) : (
                // If not logged in, show a login prompt or any other UI
                <section className="py-5">
                    <div className="container text-center">
                        <h2>Please log in to make an appointment.</h2>
                        {/* Optionally, provide a button to redirect to a login page */}
                       <a href='/login'> <button className="btn btn-primary">Login</button></a>
                    </div>
                </section>
            )}

            {/* These components are always displayed */}
            <Contact />
            <Footer />
        </div>
    );
}