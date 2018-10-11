import React from 'react';
import { connect, } from 'react-redux';
import { Route, } from 'react-router-dom';

const IsAuth = ({ render, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      const isAuth = rest.token ? true : false;
      return (
        <React.Fragment>
          {render({
            isAuth,
            IsAuth: isAuth,
            props,
          })}
        </React.Fragment>
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
