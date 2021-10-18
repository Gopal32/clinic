import React from 'react';
import Navbar from './component/Navbar'
import Slider from './component/Slider';
import Footer from './component/Footer';
import Login from './component/Login';
import Register from './component/Register';
import Appointment from './component/appointment/Appointment';
import Consultations from './component/services/Consultations';
import Diagnostics from './component/services/Diagnostics';
import HealthChecks from './component/services/HealthChecks';
import HealthHome from './component/services/HealthHome';
import Vaccination from './component/services/Vaccinations';
import AboutAHLL from './component/aboutus/AboutAHLL';
import AboutClinic from './component/aboutus/AboutClinic';
import AboutGroup from'./component/aboutus/AboutGroup';
import OurProfiles from './component/aboutus/OurProfiles';
import OurTeam from './component/aboutus/OurTeam'
import { Route, Switch } from 'react-router';

const Routing = () => {

    return (
        <>
        <Navbar />
        <Switch>
            <Route exact path='/' component={Slider} />
            <Route exact path="/appointment" component={Appointment} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/about/aboutahll' component={AboutAHLL} />
            <Route exact path='/about/aboutclinic' component={AboutClinic} />
            <Route exact path='/about/aboutgroup' component={AboutGroup} />
            <Route exact path='/about/ourprofile' component={OurProfiles} />
            <Route exact path='/about/ourteam' component={OurTeam} />
            <Route exact path='/service/consultation' component={Consultations} />
            <Route exact path='/service/diagnostic' component={Diagnostics} />
            <Route exact path='/service/healthcheck' component={HealthChecks} />
            <Route exact path='/service/vaccination' component={Vaccination} />
            <Route exact path='/service/healthhome' component={HealthHome} />
        </Switch>
        <Footer />
        </>
    )
}

export default Routing;
