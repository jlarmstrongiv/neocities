import React from 'react';
import { connect, } from 'react-redux';
import * as actions from 'store/actions';
import * as selectors from 'store/selectors';
import Resource from 'pages/Resources/Resource';
// given a roleId in props

class Resources extends React.Component {
  render() {
    return (
      <div>
        <br />
        {this.props.role.name}
        <br />
        Resources
        <div>
          {this.props.resourcesOrder.map(resourceId => (
            <Resource
              key={resourceId}
              resourceId={resourceId} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    resourcesOrder: selectors.resourcesOrderByRole(state, ownProps.roleId),
    role: state.roles.items[ownProps.roleId],
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return { onResourcesInit: () => dispatch(actions.resourcesInit()), };
};
export default connect(mapStateToProps, mapDispatchToProps)(Resources);
