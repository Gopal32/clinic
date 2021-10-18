import React, { useState }  from 'react';
import './Style.css';
import Logo from '../img/logo.png';
import { NavLink } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';
import Login from './Login';

const Navbar = () =>{

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
        <header>
            <div className="main_header" >
                <div className='logo'>
                    <img src={Logo} alt='logo' />
                </div>
                <nav>
                    <NavLink to='/' className="navlink"><b>Home</b></NavLink>
                    <NavLink to='*' className="navlink"><b>Services</b></NavLink>
                    <NavLink to='/appointment' className="navlink"><b>Appointment</b></NavLink>
                    <h3 onClick={showSidebar} className="navlink">Login</h3>
                </nav>
                <div className={sidebar ? 'nav-menu active' : 'nav-menu'} >
                    <ul >
                        <li>
                            <h6 onClick={showSidebar} className='menu-close'>
                                <AiIcons.AiOutlineClose />
                            </h6>
                        </li>
                        <li>
                            <div className="main_login">
                                <div className="head">
                                    <h2>Login</h2>
                                    <NavLink to="/register" onClick={showSidebar} className="register_link">Register for free</NavLink>
                                </div>
                                <Login />   
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
        </>
    )

}

export default Navbar;
