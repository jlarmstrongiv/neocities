import React from 'react';
import { connect, } from 'react-redux';
import * as selectors from 'store/selectors';

// props resourceId
class Resource extends React.Component {
  render() {
    const resource = this.props.resource;
    return (
      <div>
        Name: {resource.resource.name}
        {console.log(resource)}
        <br />
          Deployed { resource.deployed } 
        <br />
          Total: {resource.quantity}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { resource: selectors.resourceRes(state, ownProps.resourceId), };
};

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {};
// };

export default connect(mapStateToProps, null)(Resource);
