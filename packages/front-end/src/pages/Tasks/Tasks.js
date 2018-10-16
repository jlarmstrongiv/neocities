import React from 'react';
import { connect, } from 'react-redux';
import * as actions from 'store/actions';
import Task from 'pages/Tasks/Task';

class Tasks extends React.Component {
  componentDidMount() {
    this.props.onTasksInit();
  }
  render() {
    return (
      <div>
        Tasks
        <div>
          {this.props.tasksOrder.map(taskId => (
            <Task
              key={taskId}
              taskId={taskId} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state.tasks.itemsOrder)
  return { tasksOrder: state.tasks.itemsOrder, };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return { onTasksInit: () => dispatch(actions.tasksInit()), };
};
export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
