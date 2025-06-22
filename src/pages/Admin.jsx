import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Admin() {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // Check if the user is an admin
    useEffect(() => {
        const userRole = localStorage.getItem("role");
        if (userRole !== "admin") {
            navigate("/user-dashboard");
        }
    }, [navigate]);

    // Fetch all bookings (Admin view)
    useEffect(() => {
        const user_id = localStorage.getItem("user_id");
        if (!user_id) {
            navigate("/");
            return;
        }

        const fetchBookings = async () => {
            try {
                const res = await fetch("http://localhost:3000/get-admin-bookings", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ user_id })
                });

                if (!res.ok) {
                    throw new Error("Failed to fetch bookings");
                }

                const data = await res.json();
                setBookings(data);
            } catch (err) {
                console.error("Error fetching bookings:", err);
                alert("Failed to fetch bookings. Please log in again.");
                handleLogout();
            } finally {
                setLoading(false);
            }
        };

        fetchBookings();
    }, [navigate]);

    // Logout function
    const handleLogout = () => {
        localStorage.removeItem("user_id");
        localStorage.removeItem("role");
        navigate("/");
    };

    return (
        <div className="admin-container" style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
            {/* Navbar */}
            <nav className="navbar" style={{ background: '#007bff', color: 'white', padding: '10px 20px' }}>
                <div className="container-fluid d-flex justify-content-between">
                    <span className="navbar-brand" style={{ fontSize: '24px', fontWeight: 'bold' }}>Admin Panel</span>
                    <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                </div>
            </nav>

            {/* Appointment History */}
            <div className="container my-4 p-3 bg-light rounded shadow">
                <h2 className="text-center mb-4" style={{ color: '#007bff' }}>Appointment History</h2>
                {loading ? (
                    <div className="text-center">Loading...</div>
                ) : (
                    <div className="table-responsive">
                        <table className="table table-bordered table-hover text-center">
                            <thead className="table-primary">
                                <tr>
                                    <th>Appointment ID</th>
                                    <th>Booked By</th>
                                    <th>Patient Name</th>
                                    <th>Gender</th>
                                    <th>Appointment Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bookings.length > 0 ? (
                                    bookings.map((booking, index) => (
                                        <tr key={index}>
                                            <td>#{booking.appointment_id}</td>
                                            <td>{booking.booked_by}</td>
                                            <td>{booking.patient_name}</td>
                                            <td>{booking.gender}</td>
                                            <td>{booking.appointment_date.split("T")[0]}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5" className="text-muted">No bookings found.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}
