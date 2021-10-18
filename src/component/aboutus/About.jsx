import React from 'react';
import { Route, Switch } from 'react-router';
import AboutClinic from './AboutClinic';
import AboutAHLL from './AboutAHLL';
import AboutGroup from './AboutGroup';
import OurProfiles from './OurProfiles';
import OurTeam from './OurTeam';

const About = () =>{

    return (
        <>
        <div className="aboutus">
            <div className="left_module">
                <Switch>
                    <Route path='/about' component={AboutClinic} />
                    <Route path='/about/aboutahll' component={AboutAHLL} />
                    <Route path='/about/aboutgroup' component={AboutGroup} />
                    <Route path='/about/ourprofile' component={OurProfiles} />
                    <Route path='/about/ourteam' component={OurTeam} />
                </Switch>
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

export default About;
