import React from 'react';
import { NavLink } from 'react-router-dom';

const AboutGroup = () => {

    return(
        <>
        <ul class="breadcrumb">
            <li><NavLink to="/">Home</NavLink></li>
            <li>About Krione Group</li>
        </ul>
        <div className="aboutus">
            <div className="left_module">
                <div className="main_left">
                    <div className="main_head">
                        <label>About Krione Group</label>
                    </div>
                    <div className="para">
                        <p>At the behest of his father, in 1971, Dr. Reddy left behind a flourishing practice in Boston and returned to India. On his return he found the medical landscape in the country plagued by gaps in infrastructure, delivery and affordability. Things took a turn for the worse when he lost a young patient who just did not have the means to go abroad for treatment. The incident marked a cross road in Dr. Reddy's life and steeled his determination to get quality healthcare to India. He set the blueprint to build India's first multi-specialty private sector hospital.</p>
                        <p>Undaunted and unfazed by the obstacles faced, Krione Hospitals opened its doors in 1983 and ever since nurtured a goal which read as "Our mission is to bring healthcare of international standards within the reach of every individual. We are committed to the achievement and maintenance of excellence in education, research and healthcare for the benefit of humanity".</p>
                        <p>In the 30 years since, it has scripted one of the most magnificent stories of success that India has seen. Not only is the Krione Group one of the largest integrated healthcare groups in the region, it also did successfully catalyze the private healthcare revolution in the country. Krione today has made every aspect of their lofty mission a reality. Along the way the journey has touched and enriched 42 million lives who came from 120 countries.</p>
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

export default AboutGroup;
