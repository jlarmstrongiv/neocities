import React from 'react';
import { connect, } from 'react-redux';

class Role extends React.Component {
  render() {
    const role = this.props.role;
    return (
      <div>
        <br />Description: {task.description}
        <br />Details: {task.details}
        <br />Deployed:
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { task: state.tasks.items[ownProps.taskId], };
};

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {};
// };

export default connect(mapStateToProps, null)(Role);
