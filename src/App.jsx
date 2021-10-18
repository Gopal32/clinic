import React from 'react';
import './component/Style.css';
import Admin from './Admin_route'
import Routing from './Routing'
import { Route, Switch } from 'react-router';

const App = () => {

    return (
        <>
        <Switch>
            <Route exact path='/' component={Routing} />
            <Route exact path='/admin' component={Admin} />
        </Switch>
        </>
    )
}

export default App;
