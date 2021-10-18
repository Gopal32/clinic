import React from 'react';
import { NavLink } from 'react-router-dom';

const HealthChecks = () => {

    return(
        <>
        <ul class="breadcrumb">
            <li><NavLink to="/">Home</NavLink></li>
            <li>Health Check</li>
        </ul>
        <div className="services">
            <div className="left_module">
                <div className="main_left">
                    <div className="main_head">
                        <label>Health Checks</label>
                    </div>
                    <div className="para">
                        <p>The health of you and your loved ones is the single most precious commodity in life. To protect this, and to prevent the onset of disease and illness, it is important that you build the foundation of a strong protective wall. With Apollo Clinic’s health packages, you can now have the defensive system that will help secure your health.</p>
                        <p>Thanks to modern medicine, diseases that were previously thought incurable can now be treated, provided the disease is diagnosed in its initial stages. Regular health check-ups help assess a person’s health, increase awareness about potential threats and provide an enormous amount of reassurance.</p>
                        <p>The main aim of our health check-up packages is to help you detect and tackle diseases before they become untreatable. Our comprehensive health check-up is ideal for people who have high-stress lifestyles, extended work hours, irregular food habits or a predisposition to certain diseases.</p>
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

export default HealthChecks;
