import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Appointment() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [bookingDate, setBookingDate] = useState("");
    const [notes, setNotes] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const user_id = localStorage.getItem("user_id");
    const today = new Date().toISOString().split("T")[0];

    async function handleSubmit(e) {
        e.preventDefault();
        setMessage("");

        if (!user_id) {
            navigate("/");
            return;
        }

        if (!bookingDate || bookingDate < today) {
            setMessage("Invalid date! Please select today or a future date.");
            return;
        }

        const appointmentData = { name, age, gender, appointment_date: bookingDate, user_id, notes };

        try {
            const response = await fetch("http://localhost:3000/book-appointment", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(appointmentData),
            });

            const result = await response.json();
            setMessage(result.message);

            if (result.message === "Appointment booked successfully") {
                setTimeout(() => navigate("/"), 2000);
            }
        } catch (error) {
            console.error("Error:", error);
            setMessage("An error occurred while booking. Please try again.");
        }
    }

    return (
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
                            <input type="date" id="bookingDate" className="form-control" value={bookingDate} min={today} onChange={e => setBookingDate(e.target.value)} required />
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
    );
}
