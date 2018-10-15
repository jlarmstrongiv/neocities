import React from 'react';
import { connect, } from 'react-redux';
import * as actions from 'store/actions';
import RoleResources from 'pages/Resources/RoleResources';

class RolesResources extends React.Component {
  componentDidMount() {
    this.props.onRolesInit();
    this.props.onResourcesInit();
  }
  render() {
    return (
      <div>
        Roles
        <div>
          {this.props.roles.itemsOrder.map(roleId => (
            <RoleResources
              key={roleId}
              roleId={roleId} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { roles: state.roles, };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onResourcesInit: () => dispatch(actions.resourcesInit()),
    onRolesInit: () => dispatch(actions.rolesInit()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(RolesResources);
