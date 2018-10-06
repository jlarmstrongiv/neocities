import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import ProtectedRoute from 'hoc/ProtectedRouted/ProtectedRoute';
import * as async from 'pages/AsyncPages';

class Pages extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <ProtectedRoute
            path="/dashboard"
            component={async.Dashboard} />
          <ProtectedRoute
            path="/chat"
            component={async.Chat} />
          <ProtectedRoute
            path="/resources"
            component={async.Resources} />
          <ProtectedRoute
            path="/tasks"
            component={async.Tasks} />
          <ProtectedRoute
            path="/Briefings"
            component={async.Briefings} />
          <Route
            path='/'
            exact
            component={async.Index} />
          <Route
            path='/login'
            component={async.Login} />
          <Route
            component={async.NotFound} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Pages;
