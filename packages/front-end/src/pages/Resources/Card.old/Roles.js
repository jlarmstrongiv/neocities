import React from 'react';
import { connect, } from 'react-redux';
import * as actions from 'store/actions';
import Resources from 'pages/Resources/Resources';

class Roles extends React.Component {
  componentDidMount() {
    this.props.onRoleInit();
  }
  render() {
    return (
      <div>
        Roles
        <div>
          {this.props.roles.itemsOrder.map(roleId => (
            <Resources
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
  return { onRoleInit: () => dispatch(actions.roleInit()), };
};
export default connect(mapStateToProps, mapDispatchToProps)(Roles);
