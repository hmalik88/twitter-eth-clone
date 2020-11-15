import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import ProfilePage from './ProfilePage';
import LogOutPage from './LogOutPage';

function ProtectedRoutes() {
    return(
        <>
            <Switch>
                <Route exact path="/logout" component={LogOutPage} />
                <Route exact path="/home" component={HomePage} />
                <Route path="/:username" component={ProfilePage} />
                <Route exact path="/" component={HomePage} />
                
            </Switch>
        </>
    )
}

export default ProtectedRoutes;