import React from 'react';
import { connect, } from 'react-redux';
import { Route, } from 'react-router-dom';

const IsAuth = ({ render, token, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      const isAuth = token ? true : false;
      return (
        <React.Fragment>
          {render({
            isAuth,
            token,
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
