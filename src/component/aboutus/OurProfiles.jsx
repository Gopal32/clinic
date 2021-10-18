import React from 'react';
import { NavLink } from 'react-router-dom';

const OurProfiles = () => {

    return(
        <>
        <ul class="breadcrumb">
            <li><NavLink to="/">Home</NavLink></li>
            <li>Our Profiles</li>
        </ul>
        <div className="aboutus">
            <div className="left_module">
                <div className="main_left">
                    <div className="main_head">
                        <label>Our Chairman's Profile</label>
                    </div>
                    <div className="para">
                        <p>A compassionate humanitarian, dedicated to bringing world-class healthcare within the economic and geographic reach of millions of patients' best describes Dr. Prathap C Reddy, Founder Chairman of the Krione Hospitals Group.</p>
                        <p>Dr. Reddy received his medical degree from the Stanley Medical College in Chennai and later trained as a Cardiologist in the UK and USA. He did his Fellowship from the Massachusetts General Hospital, Boston and went on to head several research programs at the Missouri State Chest Hospital, USA where he worked for several years before returning to India in 1971, at the behest of his father.</p>
                        <p>The dream of making world-class medical available in India spurred him to set up the Krione Hospitals in Chennai in 1983 at a time when private healthcare institutions were virtually unknown in our country. The new hospital attracted the best medical talent, including eminent non-resident Indian doctors from hospitals in the US and UK.</p>
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

export default OurProfiles;
