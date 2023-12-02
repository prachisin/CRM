import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/login", formData, {
            headers: {
                'Content-Type': 'application/json',
                // Add any additional headers as needed
            }
        })
        .then((result) => {
            console.log('Server Response:', result.data);
        
            // Check the structure of result.data and adjust the condition accordingly
            if (result.data && result.data.message === "Login successfully") {
                navigate('/Dashboard');
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful',
                    text: 'You are now logged in!',
                });
            }
        })
        
            .catch((err) => console.log('Error:', err));
    };

    return (
        <div className="login-container">
            <div className="left-section">
                <img src="formimage.avif" alt="Login" />
            </div>
            <div className="right-section">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" name="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} />
                    </div>
                    <button type='submit'>Login</button>
                    <br /><br />
                    Don't have an account <Link to='/Register'>Register now?</Link>
                    <br /><br />
                    If forgot password <Link to='/Forgot'>Reset now?</Link>
                </form>
            </div>
        </div>
    );
};

export default Login;
