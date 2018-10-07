import React from 'react';
import { connect, } from 'react-redux';
import IsAuth from 'hoc/IsAuth/IsAuth';
import { Redirect, } from 'react-router-dom';
import * as actions from 'store/actions';

class Login extends React.Component {
  state = { auth: { participantId: '', }, }
  componentDidMount() {
    this.props.onAuthInit();
  }
  onLoginChange = event => {
    this.setState({ auth: {
      ...this.state.auth,
      participantId: event.target.value,
    }, });
  }
  onLoginSubmit = event => {
    this.props.onAuthCreate(this.state.auth);
  }
  render() {
    return (
      <div>
        <IsAuth render={({ isAuth, }) => {
          if (isAuth) return (
            <Redirect to='/dashboard' />
          );
          return (
            <React.Fragment>
              <input
                value={this.state.participantId}
                onChange={this.onLoginChange}></input>
              <button onClick={this.onLoginSubmit}>Login</button>
            </React.Fragment>
          );
        }} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { auth: state.auth, };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onAuthCreate: (auth) => dispatch(actions.authCreate(auth)),
    onAuthInit: () => dispatch(actions.authInit()),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Login);
