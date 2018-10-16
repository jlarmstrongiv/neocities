import React from 'react';
import { connect, } from 'react-redux';
import * as selectors from 'store/selectors/task';

class Task extends React.Component {
  render() {
    const task = this.props.task;
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
  return { task: selectors.taskRes(state, ownProps.taskId), };
};

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {};
// };

export default connect(mapStateToProps, null)(Task);
