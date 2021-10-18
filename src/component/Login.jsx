import React from 'react'
import { NavLink } from 'react-router-dom';
import Google from '../img/google.png' 
 
const Login = () => {
 
    return (
        <>
        <form>
            <div className="field1">
                <label>Email ID / Username</label>
                <input type="text" placeholder="Enter your Email / Username" />
            </div>
            <div className="field2">
                <label>Password</label>
                <input type="password" placeholder="Enter your Password" />
            </div>
            <div className="forget">
                <NavLink to='/' className="navlink" >Forget Password?</NavLink>
            </div>
            <div className="admin_link">
                <NavLink to='/admin' className="navlink" >Admin Login?</NavLink>
            </div>
            <div className="login_btn">
                <button>Login</button>
            </div>
            <div className="or">
                <span>or</span>
            </div>
            <div className="social_media">
                <div className="google">
                    <img src={Google} className="google-icon" alt="google" />
                    <span>Sign in with Google</span>
                </div>
            </div>
        </form>
        </>
    )
}

export default Login; 
