import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {

    return (
        <>
        <footer>
            <hr />
            <div className="main_foot">
                <div className="info">
                    <h3>Consultations</h3>
                    <ul>
                        <li>General Medicine</li>
                        <li>Gynaecology & Obstetrics</li>
                        <li>Paediatrics</li>
                        <li>Dermatology</li>
                        <li>ENT</li>
                    </ul>
                </div>
                <div className="info">
                    <h3>Diagnostics</h3>
                    <ul>
                        <li>Laboratory</li>
                        <li>X-Ray</li>
                        <li>ECG</li>
                        <li>TMT</li>
                        <li>Genetic Screening Tests</li>
                    </ul>
                </div>
                <div className="info">
                    <h3>Health Checks</h3>
                    <ul>
                        <li>Krione Health Check</li>
                        <li>Krione Heart Check</li>
                        <li>Krione Whole Body Check</li>
                        <li>Krione Master Health Check</li>
                        <li>Krione Executive Health Check</li>
                    </ul>
                </div>
                <div className="info">
                    <h3>About Us</h3>
                    <ul>
                        <li><NavLink to='/about/aboutclinic'className="navlink">About Krione Clinic</NavLink></li>
                        <li><NavLink to='/about/aboutahll'className="navlink">About AHLL</NavLink></li>
                        <li><NavLink to='/about/aboutgroup'className="navlink">About Krione Group</NavLink></li>
                        <li><NavLink to='/about/ourprofile'className="navlink">Our Chairman's Profile</NavLink></li>
                        <li><NavLink to='/about/ourteam'className="navlink">Our Management Team</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className="copywrite">
                <p>Copyright © 2021, Krione Health and Lifestyle Limited, All Rights Reserved.</p>
            </div>
        </footer>
        </>
    )
}

export default Footer;
