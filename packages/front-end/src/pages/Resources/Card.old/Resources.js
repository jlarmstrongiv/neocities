import React from 'react';
import { connect, } from 'react-redux';
import * as actions from 'store/actions';
import * as selectors from 'store/selectors';
import Role from 'pages/Roles/Role';
import Resource from 'pages/Resources/Resource';
// given a roleId in props

class Resources extends React.Component {
  componentDidMount() {
    this.props.onResourcesInit();
  }
  render() {
    return (
      <div>
        <Role roleId={this.props.roleId} />
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
    resourcesOrder: selectors.resourcesOrderByRole(state),
    role: state.roles.items[ownProps.roleId],
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return { onResourcesInit: () => dispatch(actions.resourcesInit()), };
};
export default connect(mapStateToProps, mapDispatchToProps)(Resources);
