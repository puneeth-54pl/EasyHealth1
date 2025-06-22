import './LoginRegPage.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginRegPage() {
    const [page, setPage] = useState('login');
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const navigate = useNavigate();

    function pageRedirect(event) {
        setPage(event.target.id === 'show-register' ? 'register' : 'login');
        setFormData({ name: '', email: '', password: '' });
    }

    function handleChange(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    async function register(event) {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    username: formData.email,
                    password: formData.password
                })
            });
            const data = await response.json();
            if (data.success) {
                alert('Registration Successful!');
                setPage('login');
            } else {
                alert(data.error);
            }
        } catch (error) {
            alert('Error during registration. Please try again.');
        }
    }

    async function login(event) {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: formData.email,
                    password: formData.password
                })
            });
            const data = await response.json();
            if (data.token) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('user_id', data.user_id);
                if (data.admin) {
                    alert('Admin Login Successful!');
                    navigate('/admin');
                } else {
                    localStorage.setItem('username', data.user);
                    alert('Login Successful!');
                    navigate('/home');
                }
            } else {
                alert(data.error);
            }
        } catch (error) {
            alert('Error during login. Please try again.');
        }
    }

    return (
        <div id="body">
            <div className="container" id={page === 'login' ? 'login-container' : 'register-container'}>
                <h3 className="form-title">{page === 'login' ? 'Login' : 'Register'}</h3>
                <form id={page === 'login' ? 'login-form' : 'register-form'} onSubmit={page === 'login' ? login : register}>
                    {page === 'register' && (
                        <div className="mb-3">
                            <label htmlFor="register-name" className="form-label">Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="register-name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                                required
                            />
                        </div>
                    )}
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email address"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">{page === 'login' ? 'Login' : 'Register'}</button>
                </form>
                <div className="toggle-link">
                    {page === 'login' ? (
                        <p>
                            Don't have an account? <a onClick={pageRedirect} id="show-register">Register here</a>
                        </p>
                    ) : (
                        <p>
                            Already have an account? <a onClick={pageRedirect} id="show-login">Login here</a>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
