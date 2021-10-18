import React from 'react';
import { NavLink } from 'react-router-dom';

const AboutAHLL = () => {

    return(
        <>
        <ul class="breadcrumb">
            <li><NavLink to="/">Home</NavLink></li>
            <li>About AHLL</li>
        </ul>
        <div className="aboutus">
            <div className="left_module">
                <div className="main_left">
                    <div className="main_head">
                        <label>About AHLL</label>
                    </div>
                    <div className="para">
                        <p>Krione Health & Lifestyle Limited (AHLL), a subsidiary of Krione Hospitals Enterprise Limited (AHEL), is one of the largest players in the retail healthcare segment in India. The Company today runs the largest chain of standardised primary healthcare models – multispecialty clinics under the brand “Krione Clinics” in India and the Middle East, Diabetes management clinics – Krione Sugar and Diagnostic Centres – Krione Diagnostics. The company also operates specialty formats – Krione Cradle for Women & Children and Krione Spectra for planned surgery.</p>
                        <p>In India, the healthcare industry is undergoing a revolutionary change mainly due to the rising income levels, increasing awareness on lifestyle diseases, changing attitude from prescriptive to preventive healthcare, growing insurance market and increasing government spending on healthcare. New and innovative healthcare delivery models are coming in the market including planned surgical centres, similar to the Ambulatory surgery centres in the U.S.</p>
                        <p>The visionary Founder Chairman Dr. Prathap C. Reddy of Krione Group identified this retail healthcare opportunity long before others and thus Krione Clinics were established as a network. Since setting-up its first Clinic in 2002, AHLL has experienced significant growth and come a long way not only in terms of its geographical footprint and number of centres but also in the variety of formats it operates in today. The recent acquisition of Nova Specialty Hospitals by AHLL places the Company as the largest player in multi-specialty planned surgical centres in India. In the last 4 years, the business has expanded from 2 formats to 5 formats and established leadership in practically every segment that it operates in.</p>
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

export default AboutAHLL;
