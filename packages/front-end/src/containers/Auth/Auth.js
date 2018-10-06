import React from 'react';
import { connect, } from 'react-redux';
import * as actions from 'store/actions';

class Auth extends React.Component {
  componentDidMount() {
    // this.props.onInit();
  }
  render() {
    return (
      <React.Fragment>
        {this.props.children}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { auth: state.auth, };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return { onInit: () => dispatch(actions.authInit()), };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
