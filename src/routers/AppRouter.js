import React, { useContext } from 'react'
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { AuthContext } from '../auth/AuthContext';

export const AppRouter = () => {

  const {user} = useContext(AuthContext);
    return (
        <Router>
      <div>
        <Switch>
        <PublicRoute path="/login" component={LoginScreen} isAuthenticated={user.logged}/>
        <PrivateRoute path="/" component={DashboardRoutes} isAuthenticated={user.logged}/>
        </Switch>
      </div>
    </Router>
    )
}
