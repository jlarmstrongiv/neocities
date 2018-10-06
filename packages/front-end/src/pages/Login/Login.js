import React from 'react';
import IsAuth from 'hoc/IsAuth/IsAuth';
import { Redirect, } from 'react-router-dom';

class Login extends React.Component {
  render() {
    return (
      <div>
        <IsAuth render={(isAuth) => {
          if (isAuth) return (
            <Redirect to='/dashboard' />
          );
          return <div>Login</div>;
        }} />
      </div>
    );
  }
}

export default Login;
