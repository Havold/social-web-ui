import { Link } from 'react-router-dom';
import './login.scss';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';

const Login = () => {
    const { login } = useContext(AuthContext);
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
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                    </form>
                    <button onClick={login}>Login</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
