import React from 'react';
import { connect, } from 'react-redux';
import * as actions from 'store/actions';
import { baseUrl, } from 'axios/axios';

class Auth extends React.Component {
  componentDidMount() {
    const websocket = new WebSocket(`'wss://${baseUrl}/ws/api/dynamic_data/${this.props.token}/`);
  }

  render() {
    return <React.Fragment>{this.props.children}</React.Fragment>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { token: state.auth.token, };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return { onInit: () => dispatch(actions.authInit()), };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
