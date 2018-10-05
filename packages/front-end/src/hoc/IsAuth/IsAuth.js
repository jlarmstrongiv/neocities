import React from 'react';
import { connect, } from 'react-redux';
import { Route, } from 'react-router-dom';

const IsAuth = ({ component: Component, token, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (!token) return (
        <Component {...props} />
      );
      return (
        <Component
          {...props}
          token={token}
        />
      );
    }}
  />
);

const mapStateToProps = (state, ownProps) => {
  return { token: state.auth.token, };
};

export default connect(
  mapStateToProps,
  null,
  null,
  { pure: false, }
)(IsAuth);
