import React from "react";
import Login from '../pages/Login';
import NoMatch from '../pages/404';
import Home from '../pages/Home';
import PrivateRoute from './PrivateRoute';

import {
    Switch,
    Route,
} from "react-router-dom";

const Routes = () => (
    <Switch>

        <Route exact path={['/login', '/']}>
            <Login />
          </Route>

        <PrivateRoute exact path="/home">
            <Home/>
        </PrivateRoute>

        <Route path="*">
            <NoMatch />
          </Route>
    </Switch>
);

export default Routes;