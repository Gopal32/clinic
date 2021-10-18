import React from 'react';
import { NavLink } from 'react-router-dom';

const HealthHome = () => {

    return(
        <>
        <ul class="breadcrumb">
            <li><NavLink to="/">Home</NavLink></li>
            <li>Health Home</li>
        </ul>
        <div className="services">
            <div className="left_module">
                <div className="main_left">
                    <div className="main_head">
                        <label>Health @ Home</label>
                    </div>
                    <div className="para">
                        <p>The most successful form of treatment is often a combination of medical treatment and home care. At Apollo Clinic, we understand how important it is to have the right health care at home, and how important it is to be comfortable throughout your treatment.</p>
                        <p>Thus, in order to supplement the treatment procedures that are conducted at our multi-speciality clinic, our medical experts have also created a number of home health care services, which help to ensure that you have access to the best treatment, while in the comfort of your home.</p>
                        <p>The visionary Founder Chairman Dr. Prathap C. Reddy of Krione Group identified this retail healthcare opportunity long before others and thus Krione Clinics were established as a network. Since setting-up its first Clinic in 2002, AHLL has experienced significant growth and come a long way not only in terms of its geographical footprint and number of centres but also in the variety of formats it operates in today. The recent acquisition of Nova Specialty Hospitals by AHLL places the Company as the largest player in multi-specialty planned surgical centres in India. In the last 4 years, the business has expanded from 2 formats to 5 formats and established leadership in practically every segment that it operates in.</p>
                    </div>
                </div>
            </div>
            <div className="right_module">
                <div className="main_right">
                    <div className="patients_msg">
                        <label><b>Our Patient's Speak</b></label>
                        <p><i>I visited the Chanda Nagar clinic for my treatment. The staff was very supportive and provided with all the necessary information. I liked the technical expertise provided by the nurses, phlebotomist and radiology technicians. The services were fast and reports were ready on time.</i></p>
                        <h3>Abhishek Mahajan - Indirapuram</h3>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default HealthHome;
