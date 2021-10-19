import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <div style={{ height: "calc(83vh)" }}>
            <div className="login-form">
                <div className="bg">
                    <h2 className="my-5">Login</h2>
                    <form>
                        <input type="email" name="" id="" placeholder="Your Email" />
                        <br />
                        <input className="my-2" type="password" placeholder="Your Password" name="" id="" />
                        <br />
                        <input className="bg-black text-white my-2 rounded-2" type="submit" value="Submit" />
                    </form>
                    <p>new to exercise reflex website? <Link to="/register" className="text-decoration-none">Create Account</Link></p>
                    <div>----------------or-----------------</div>
                    <button
                        className="btn-regular bg-black text-white mt-4 rounded-3"
                        onClick={handleGoogleLogin}
                    >Google Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Login;