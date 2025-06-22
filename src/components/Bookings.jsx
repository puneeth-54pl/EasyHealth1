import { useState, useEffect } from "react";
import "./Bookings.css";

export default function Bookings() {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const user_id = localStorage.getItem("user_id");
        if (!user_id) return;

        fetch("http://localhost:3000/get-bookings", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ user_id }),
        })
        .then(res => res.json())
        .then(data => setBookings(data))
        .catch(err => console.error("Error fetching bookings:", err));
    }, []);

    return (
        <section className="bookings-section py-5">
            <div className="container">
                <h2 className="text-center mb-4">Appointment History</h2>
                <div className="table-responsive">
                    <table className="table table-bordered table-hover text-center">
                        <thead className="table-primary">
                            <tr>
                                <th>Appointment ID</th>
                                <th>Patient Name</th>
                                <th>Gender</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.length > 0 ? (
                                bookings.map((booking, index) => (
                                    <tr key={index}>
                                        <td>#{booking.id}</td>
                                        <td>{booking.name}</td>
                                        <td>{booking.gender}</td>
                                        <td>{booking.appointment_date}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="text-muted">No bookings found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
