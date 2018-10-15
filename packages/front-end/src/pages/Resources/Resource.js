import React from 'react';
import { connect, } from 'react-redux';
// import * as selectors from 'store/selectors';

class Resource extends React.Component {
  render() {
    const resource = this.props.resource;
    return (
      <div>
        <br />Name: {resource.name}
        <br />Deployed {resource.deployed}
        <br />Total: {resource.total}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { resource: state.resources.items[ownProps.resourceId], };
};

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {};
// };

export default connect(mapStateToProps, null)(Resource);
