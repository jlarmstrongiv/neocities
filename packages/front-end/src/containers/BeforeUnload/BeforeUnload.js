import React, { Component, } from 'react';
import { connect, } from 'react-redux';

class BeforeUnload extends Component {
  shouldComponentUpdate() {
    return false;
  }
  componentDidMount() {
    window.addEventListener('beforeunload', this.props.onClearCache;
    window.addEventListener('unload', this.props.onClearChache;
  }
  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.unload);

  }
  render() {
    return <React.Fragment />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BeforeUnload);
