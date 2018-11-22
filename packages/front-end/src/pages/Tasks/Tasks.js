import React from 'react';
import { connect, } from 'react-redux';
import * as actions from 'store/actions';
import Task from 'pages/Tasks/Task';
import TaskPanel from 'pages/Tasks/TaskPanel';

class Tasks extends React.Component {
  componentDidMount() {
    this.props.onTasksInit();
  }
  render() {
    return (
      <div className="task_container">
        <div className="task_list">
          {this.props.tasksOrder.map(taskId => (
            <Task
              key={taskId}
              taskId={taskId} />
          ))}
        </div>
        <div className="task_control">
          <TaskPanel />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { tasksOrder: state.tasks.itemsOrder, };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return { onTasksInit: () => dispatch(actions.tasksInit()), };
};
export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
