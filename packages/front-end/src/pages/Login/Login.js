import React from 'react';
import { connect, } from 'react-redux';
import IsAuth from 'hoc/IsAuth/IsAuth';
import { Redirect, } from 'react-router-dom';
import * as actions from 'store/actions';

class Login extends React.Component {
  state = { loginValue: 'participantID', };
  componentDidMount() {
    this.props.onAuthInit();
  }
  onLoginChange = event => {
    this.setState({
      ...this.state,
      loginValue: event.target.value,
    });
  };
  onLoginSubmit = event => {
    const participantId = this.state.loginValue.trim();
    this.props.onAuthCreate({ participantId, });
  };
  render() {
    return (
      <div>
        <IsAuth
          render={({ isAuth, }) => {
            if (isAuth) return <Redirect to="/dashboard" />;
            return <React.Fragment>
              <input
                value={this.state.loginValue}
                onChange={this.onLoginChange} />
              <button onClick={this.onLoginSubmit}>Login</button>
              <div>{JSON.stringify(this.props.auth)}</div>
            </React.Fragment>;
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { auth: state.auth, };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onAuthCreate: (auth) => dispatch(actions.authFetch(auth)),
    onAuthInit: () => dispatch(actions.authInit()),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Login);
