import React from 'react';
import { connect, } from 'react-redux';
import * as selectors from 'store/selectors/task';

class Task extends React.Component {
  render() {
    const task = this.props.task;
    return (
      <div>
        {console.log(task)}
        <br />Description: {task.description}
        <br />Details: {task.details}
        <br />
        <div>
          {Object.values(this.props.task.resources).map(resource => (
            <div key={resource.id}>
              <br />Name: {resource.name}
              <br />Quantity: {resource.quantity}
              <br />Deployed: {resource.deployed}
            </div>
          ))}
        </div>
        <br />
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
