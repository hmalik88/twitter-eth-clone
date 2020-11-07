import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage';
import LoginPage from './LoginPage';

function LandingRoutes() {
    return (
        <>
            <Switch>
                <Route path="/login" component={LoginPage} />
                <Route path="/" component={LandingPage} />
            </Switch>
        </>
    )
}

export default LandingRoutes;