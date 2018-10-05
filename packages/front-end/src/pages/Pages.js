import React from 'react';
import { connect, } from 'react-redux';
import {
  Switch,
  Route,
} from 'react-router-dom';
import ProtectedRoute from 'hoc/ProtectedRouted/ProtectedRoute';
// Pages
import Index from 'pages/Index/Index';
import Login from 'pages/Login/Login';
import Dashboard from 'pages/Dashboard/Dashboard';
import Chat from 'pages/Chat/Chat';
import Resources from 'pages/Resources/Resources';
import Tasks from 'pages/Tasks/Tasks';
import Briefings from 'pages/Briefings/Briefings';

class Pages extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <ProtectedRoute
            path="/dashboard"
            component={Dashboard} />
          <ProtectedRoute
            path="/chat"
            component={Chat} />
          <ProtectedRoute
            path="/resources"
            component={Resources} />
          <ProtectedRoute
            path="/tasks"
            component={Tasks} />
          <ProtectedRoute
            path="/Briefings"
            component={Briefings} />
          <Route
            path='/'
            exact
            render={props => <Index {...props} />} />
          <Route
            path='/login'
            render={props => <Login {...props} />} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Pages;
