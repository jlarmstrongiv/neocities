import React from 'react';
import { connect, } from 'react-redux';
import * as actions from 'store/actions';

class Tasks extends React.Component {
  componentDidMount() {
    this.props.onTasksInit();
  }
  render() {
    return (
      <div>
        Tasks
        <div>{JSON.stringify(this.props.tasks)}</div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { tasks: state.tasks, };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return { onTasksInit: () => dispatch(actions.tasksInit()), };
};
export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
