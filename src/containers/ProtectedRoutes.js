import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import ProfilePage from './ProfilePage';
import LogOutPage from './LogOutPage';

function ProtectedRoutes() {
    return(
        <>
            <Switch>
                <Route path="/logout" component={LogOutPage} />
                <Route path="/home" component={HomePage} />
                <Route path="/" component={HomePage} />
                <Route path="/:username" component={ProfilePage} />
            </Switch>
        </>
    )
}

export default ProtectedRoutes;