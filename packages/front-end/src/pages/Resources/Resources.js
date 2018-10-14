import React from 'react';
import { connect, } from 'react-redux';
import * as actions from 'store/actions';

class Resources extends React.Component {
  componentDidMount() {
    this.props.onResourcesInit();
  }
  render() {
    return (
      <div>
        Resources
        <div>{JSON.stringify(this.props.resources)}</div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { resources: state.resources, };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return { onResourcesInit: () => dispatch(actions.resourcesInit()), };
};
export default connect(mapStateToProps, mapDispatchToProps)(Resources);
