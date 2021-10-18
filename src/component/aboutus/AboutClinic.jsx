import React from 'react';
import { NavLink } from 'react-router-dom';

const AboutClinic = () => {

    return(
        <>
        <ul class="breadcrumb">
            <li><NavLink to="/">Home</NavLink></li>
            <li>Vaccination</li>
        </ul>
        <div className="aboutus">
            <div className="left_module">
                <div className="main_left">
                    <div className="main_head">
                        <label>About Krione Clinic</label>
                    </div>
                    <div className="para">
                        <p>Krione Clinics are multi-specialty clinics run by Krione Health & Lifestyle Limited (AHLL), a subsidiary of Krione Hospitals Enterprise Limited (AHEL). AHLL is one of the largest players in the retail healthcare segment in India.</p>
                        <p>Krione Clinics was founded in 2002 with the aim “to bring healthcare of international standards within the reach of every individual.” To achieve this, Krione Clinics run a large network of Krione Clinics with over 75 clinics, both owned and franchised in India and overseas.</p>
                        <p>Each Krione Clinic is committed to not only providing consistently superior quality health care services but also addressing the day-to-day health care needs of the family. To maximize convenience and comfort, Krione Clinic is an integrated model and offers facilities for Specialist Consultation, Diagnostics, Preventive Health Checks and Pharmacy, all under one roof.</p>
                    </div>
                </div>
            </div>
            <div className="right_module">
                <div className="main_right">
                    <div className="label">
                         <h3>Symptoms</h3>
                    </div>
                    <ul>
                        <li>About Krione Clinic</li>
                        <li>About AHLL</li>
                        <li>About Krione Group</li>
                        <li>Our Chairman's Profile</li>
                        <li>Our Management Team</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default AboutClinic;
