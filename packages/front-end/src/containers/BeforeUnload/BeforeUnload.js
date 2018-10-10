import React, { Component, } from 'react';
import { connect, } from 'react-redux';
import * as actions from 'store/actions';

class BeforeUnload extends Component {
  shouldComponentUpdate() {
    return false;
  }
  componentDidMount() {
    window.addEventListener('beforeunload', this.props.onAuthDestroy);
    window.addEventListener('unload', this.props.onAuthDestroy);
  }
  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.props.onAuthDestroy);
    window.removeEventListener('unload', this.props.onAuthDestroy);
  }
  render() {
    return <React.Fragment />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return { onAuthDestroy: () => dispatch(actions.authDestroy()), };
};

export default connect(mapStateToProps, mapDispatchToProps)(BeforeUnload);
