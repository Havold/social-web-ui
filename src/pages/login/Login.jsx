import { Link, useNavigate } from 'react-router-dom';
import './login.scss';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/authContext';

const Login = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        username: '',
        password: '',
    });
    const [err, setErr] = useState(null);

    const handleLogin = async () => {
        try {
            await login(inputs);
            navigate('/');
        } catch (err) {
            setErr(err);
        }
    };

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Hello World.</h1>
                    <p>
                        Welcome to METAN, your gateway to a new social experience! Our platform connects you with
                        friends, shares moments, and keeps you engaged with the latest trends. Let's make your social
                        experience better together!
                    </p>
                    <span>Don't you have an account?</span>
                    <Link to="/register">
                        <button>Register</button>
                    </Link>
                </div>
                <div className="right">
                    <h2>Login</h2>
                    <form>
                        <input type="text" placeholder="Username" name="username" onChange={handleChange} />
                        <input type="password" placeholder="Password" name="password" onChange={handleChange} />
                    </form>
                    <button onClick={handleLogin}>Login</button>
                    {err && <span>{err.response.data}</span>}
                </div>
            </div>
        </div>
    );
};

export default Login;
