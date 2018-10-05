import React from 'react';
import { compose, } from 'redux';
import { connect, } from 'react-redux';
import {
  withRouter,
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
    const token = 'gettokenfromprops';
    return (
      <React.Fragment>
        <Switch>
          <ProtectedRoute
            token={token}
            path="/dashboard"
            component={Dashboard} />
          <ProtectedRoute
            token={token}
            path="/chat"
            component={Chat} />
          <ProtectedRoute
            token={token}
            path="/resources"
            component={Resources} />
          <ProtectedRoute
            token={token}
            path="/tasks"
            component={Tasks} />
          <ProtectedRoute
            token={token}
            path="/Briefings"
            component={Briefings} />
          <Route
            path='/'
            render={props => <Index {...props} />} />
          <Route
            path='/login'
            render={props => <Login {...props} />} />
        </Switch>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Pages);
