import React from 'react'
import { NavLink } from 'react-router-dom';

const Consultations = () => {

    return(
        <>
        <ul class="breadcrumb">
            <li><NavLink to="/">Home</NavLink></li>
            <li>Consultation</li>
        </ul>
        <div className="services">
            <div className="left_module">
                <div className="main_left">
                    <div className="main_head">
                        <label>Consultations</label>
                    </div>
                    <div className="para">
                        <p>Health is a precious treasure. However, there are circumstances when even the best preventive care may not be enough. Every year, many people fall sick, either due to diseases, or pre-existing conditions. With so much unpredictability, it is essential that you have the support of a medical expert by your side. At Apollo Clinic, we understand the uncertainty that illnesses and injuries can breed, and therefore, are committed to supporting you and ensuring that you are protected, and receive the best medical treatment possible.</p>
                        <p>Our dedicated centres offer you advice and support of our expert physicians, who are the best in their fields. Our centres offer key specialties and super specialties, to ensure that no matter what the problem is, we can help you come out of it. With state-of-the-art facilities and the best-in-class technology, as well as trained technicians and support staff, we have an answer to any query. With branches across India, you can be assured that Apollo Clinic, the best clinic for consultation, will be there to help you, no matter where you go.</p>
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

export default Consultations;
