import React, { Component, } from 'react';
import { connect, } from 'react-redux';

class BeforeUnload extends Component {
  shouldComponentUpdate() {
    return false;
  }
  componentDidMount() {
    window.addEventListener('beforeunload', this.props.onClearSession);
    window.addEventListener('unload', this.props.onClearSession);
  }
  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.props.onClearSession);
    window.removeEventListener('unload', this.props.onClearSession);
  }
  render() {
    return <React.Fragment />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return { onClearCache: () => dispatch(actions.clearSession()), };
};

export default connect(mapStateToProps, mapDispatchToProps)(BeforeUnload);
