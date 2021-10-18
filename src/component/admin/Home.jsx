import React from 'react';
import { Route, Switch } from 'react-router';
import Menu from './Header/Menu';
import Navbar from './Header/Navbar';
import Patient_info from './Patient/Patient_info ';
import Add_doctor from './Doctor/Add_doctor';
import Search_doctor from './Doctor/Search_doctor';
import Add_cat from './Category/Add_cat';
import Recent_app from './Appointment/Recent_app';

const Home = () =>{

    return (
        <>
        <div className="main_admin">
            <Navbar />
            <div className="admin_body">
                <Menu />
                <div>
                    <Switch>
                        <Route exact path='/patient_info' component={Patient_info} />
                        <Route exact path='/doctor/add_doctor' component={Add_doctor} />
                        <Route exact path='/doctor/search_doctor' component={Search_doctor} />
                        <Route exact path='/add_doctor_category' component={Add_cat} />
                        <Route exact path='/recent_app' component={Recent_app} />
                    </Switch>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;