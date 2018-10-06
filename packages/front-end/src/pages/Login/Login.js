import React from 'react';
import { connect, } from 'react-redux';
import IsAuth from 'hoc/IsAuth/IsAuth';
import { Redirect, } from 'react-router-dom';
import * as actions from 'store/actions';
class Login extends React.Component {
  render() {
    return (
      <div>
        <IsAuth render={({ isAuth, }) => {
          if (isAuth) return (
            <Redirect to='/dashboard' />
          );
          return <div>Login</div>;
        }} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { auth: state.auth, };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return { onLogin: (auth) => dispatch(actions.login(auth)), };
};


export default connect(mapStateToProps, mapDispatchToProps)(Login);
