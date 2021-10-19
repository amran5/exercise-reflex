import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div style={{ height: "calc(83vh)" }}>
            <div className="login-form">
                <div>
                    <h2 className="my-5">Register: Create Account</h2>
                    <form onSubmit="">
                        <input type="email" name="" id="" placeholder="Your Email" />
                        <br />
                        <input className="my-2" type="password" name="" id="" placeholder="Your Password" />
                        <br />
                        <input type="password" name="" id="" placeholder="Re-enter Password" />
                        <br />
                        <input className="my-2" type="submit" value="Submit" />
                    </form>
                    <p>Already have an account? <Link to="/login" className="text-decoration-none">Login</Link></p>
                    <div>----------or-------------</div>
                    <button className="btn-regular bg-black my-5 rounded-3 text-white">Google Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Register;