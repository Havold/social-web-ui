import React from 'react';
import './register.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const [inputs, setInputs] = useState({
        username: '',
        email: '',
        password: '',
        name: '',
    });

    const [err, setErr] = useState(null);

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async () => {
        try {
            await axios.post('http://localhost:8080/api/auth/register', inputs);
        } catch (error) {
            setErr(error);
        }
    };

    return (
        <div className="register">
            <div className="card">
                <div className="left">
                    <h1>METAN Social.</h1>
                    <p>
                        Sign up to connect, share, and explore on METAN. Create your account in just a few simple steps
                        and start enjoying all the great features we offer. Let’s make your social experience amazing!
                    </p>
                    <span>You already have an account?</span>
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                </div>
                <div className="right">
                    <h2>Register</h2>
                    <form>
                        <input type="text" placeholder="Username" name="username" onChange={handleChange} />
                        <input type="email" placeholder="Email" name="email" onChange={handleChange} />
                        <input type="password" placeholder="Password" name="password" onChange={handleChange} />
                        <input type="text" placeholder="Name" name="name" onChange={handleChange} />
                    </form>
                    <button onClick={handleClick}>Register</button>
                </div>
            </div>
        </div>
    );
};

export default Register;
