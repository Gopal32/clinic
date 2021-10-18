import React, { useState } from 'react';
import './Style.css';
import Img1 from '../img/slide4.jpg';
import * as AiIcons from 'react-icons/ai';
import Img2 from '../img/book-appt.gif';
import Consultation from '../img/Consultation.png';
import Diagnostics from '../img/diagnostic.png';
import Healthcheck from '../img/health-check.png';
import Vaccinations from '../img/vaccination.png';
import Healthhome from '../img/health-at-home.png';
import { NavLink } from 'react-router-dom';
import BookAppt from './BookAppt';

const Slider = () => {

    const [bookbar, setBookbar] = useState(false);

    const showBookbar = () => setBookbar(!bookbar);
    
    return (
        <>
        <div className="main">
            <div className="main_head">
                <div className='slide'>
                    <img src={Img1} alt='slide1' />
                </div>
                <div className="book_appt">
                    <img onClick={showBookbar} src={Img2} alt='book-appt' />
                </div>
                <div className={bookbar ? 'book_appts active' : 'book_appts'} >
                    <ul >
                        <li>
                            <h4 onClick={showBookbar} className='menu-close'>
                                <AiIcons.AiOutlineClose />
                            </h4>
                        </li>
                        <li><BookAppt /></li>
                        <li>
                            <button className="btn_cls" onClick={showBookbar}>Close</button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="main_body">
                <div className="patient_msg">
                    <label><b>Our Patient's Speak</b></label>
                    <p><i>I visited the Chanda Nagar clinic for my treatment. The staff was very supportive and provided with all the necessary information. I liked the technical expertise provided by the nurses, phlebotomist and radiology technicians. The services were fast and reports were ready on time.</i></p>
                    <h3>Abhishek Mahajan - Indirapuram</h3>
                </div>
                <div className="health_tips">
                    <label><b>Health Tips</b></label>
                    <h3>Tips to deal with a dry mouth</h3>
                    <p><i>If you have ever gone through a dry mouth spell, you know how uncomfortable it is. Known as Xerostomia in medical terms, a dry mouth condition is not very uncommon in people these days. Causes of dry mouth: Dry mouth can take place when the glands in your mouth do not make sali...  </i></p>
                </div>
            </div>
            <div className="main_foot">
                <h1>Our Services</h1>
                <div className="main_service">
                    <div className="service">
                        <div className="img">
                            <NavLink to='/service/consultation'>
                                <img src={Consultation} alt="Consultation" />
                            </NavLink>
                        </div>
                        <h3>Consultation</h3>
                    </div>
                    <div className="service">
                        <div className="img">
                            <NavLink to='/service/diagnostic'>
                                <img src={Diagnostics} alt="Diagnostics" />
                            </NavLink>
                        </div>
                        <h3>Diagnostics</h3>
                    </div>
                    <div className="service">
                        <div className="img">
                            <NavLink to='/service/healthcheck'>
                                <img src={Healthcheck} alt="Healthcheck" />
                            </NavLink>
                        </div>
                        <h3>Health Checks</h3>
                    </div>
                    <div className="service">
                        <div className="img">
                            <NavLink to='/service/vaccination'>
                                <img src={Vaccinations} alt="Vaccinations" />
                            </NavLink>
                        </div>
                        <h3>Vaccinations</h3>
                    </div>
                    <div className="service">
                        <div className="img">
                            <NavLink to='/service/healthhome'>
                                <img src={Healthhome} alt="Healthhome" />
                            </NavLink>
                        </div>
                        <h3>Health @ Home</h3>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Slider;