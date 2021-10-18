import React from 'react';
import { NavLink } from 'react-router-dom';

const Diagnostics = () => {

    return(
        <>
        <ul class="breadcrumb">
            <li><NavLink to="/">Home</NavLink></li>
            <li>Diagnostics</li>
        </ul>
        <div className="services">
            <div className="left_module">
                <div className="main_left">
                    <div className="main_head">
                        <label>Diagnostics</label>
                    </div>
                    <div className="para">
                        <p>Health issues are steadily rising in both, rural and urban population, due to various factors. Detecting a health problem at an early stage is vital. One of the best approaches to keep track of your health is to visit a diagnostic centre and undergo screening tests. At Apollo Clinic, we offer a range of imaging, cardiology, laboratory and diagnostic services that assist in detecting the nature, cause and stage of a health issue. We provide a comprehensive range of diagnostic services to cater to patients of all age groups, right from young children to the elderly.</p>
                        <p>At Apollo Clinic, we understand that correct diagnosis for a disease or health issue is crucial in treatment and the results of diagnostic tests are the cornerstone for an effective treatment plan. To this end, we offer an extensive range of services including:</p>
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

export default Diagnostics;
