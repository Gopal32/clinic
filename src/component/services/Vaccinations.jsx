import React from 'react';
import { NavLink } from 'react-router-dom';

const Vaccinations = () => {

    return(
        <>
        <ul class="breadcrumb">
            <li><NavLink to="/">Home</NavLink></li>
            <li>Vaccination</li>
        </ul>
        <div className="services">
            <div className="left_module">
                <div className="main_left">
                    <div className="main_head">
                        <label>Vaccinations</label>
                    </div>
                    <div className="para">
                        <p>A vaccine is a biological preparation that helps improve immunity to a particular disease. A vaccine usually contains an agent that resembles a disease-causing microorganism and is mostly made from the weakened or killed forms of the microbe, its toxins or any of its surface proteins. The agent is one that stimulates the body’s immune system to recognise the agent as foreign and destroy it. The agent also needs to remember the foreign agent so that the immune system can identify it more easily and destroy any of the microorganisms that it encounters later.</p>
                        <p>During the past years, vaccinations in India have saved more than a billion lives and prevented countless people from falling prey to a wide range of illnesses and disabilities. However, vaccine-preventable diseases such as mumps, measles, and whooping cough are still a threat. They continue affecting children, thus, resulting in hospitalisations and deaths each year. Immunisations are important for two main reasons. First, to protect yourself and second, to protect those around you. Vaccines are one of the best ways to prevent diseases.</p>
                        <p>While the benefits of immunisation are invisible, the idea is that you or your child will not become ill with any disease. Sometimes, it may be tempting to say ‘NO’ to immunisation. However, this puts health at risk of catching some severe or fatal diseases. In reality, taking a vaccination is better and safer than not taking one. Vaccination may not be 100% effective, but it is the best defence against epidemics that kill or disable millions of people.</p>
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

export default Vaccinations;
