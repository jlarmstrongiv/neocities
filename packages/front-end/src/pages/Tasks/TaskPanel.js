import React from 'react';
import { connect, } from 'react-redux';
import * as actionTypes from 'store/actions/actionTypes';
import * as selectors from 'store/selectors';
import * as actions from 'store/actions';
// import TaskPanelDeploy from 'pages/Tasks/TaskPanelDeploy';
// import TaskPanelRecall from 'pages/Tasks/TaskPanelRecall';

class TaskPanel extends React.Component {
  state = {
    selectedTaskId: '',
    selectedResourceId: '',
    selectedQuantity: 0,
    movementSelected: actionTypes.RESOURCE_DEPLOY,
    movementOptions: [
      {
        value: actionTypes.RESOURCE_DEPLOY,
        text: 'Deploy',
      },
      {
        value: actionTypes.RESOURCE_RECALL,
        text: 'Recall',
      },
    ],
  };
  componentDidMount() {
    if (!this.state.selectedTaskId) {
      this.setState({ selectedTaskId: this.props.tasks.itemsOrder[0], });
    }
    if (!this.state.selectedResourceId) {
      this.setState({ selectedResourceId: this.props.resourcesArray[0].id, });
    }
  }
  onMovementChange = event => {
    this.setState({ movementSelected: event.target.value, });
  }
  onTaskChange = event => {
    this.setState({ selectedTaskId: event.target.value, });
  }
  onResourceChange = event => {
    this.setState({ selectedResourceId: event.target.value, });
  }
  onQuantityChange = event => {
    this.setState({ selectedQuantity: 1 * event.target.value, });
  }
  onMove = event => {
    this.props.onMove({
      movement: this.state.movementSelected,
      quantity: this.state.selectedQuantity,
      resourceId: this.state.selectedResourceId,
      taskId: this.state.selectedTaskId,
    });
  }
  render() {
    return (
      <div>
        {/* Choose Deploy / Recall */}
        <div>
          {this.state.movementOptions.map((option, i) => (
            <label
              key={option.value}
              htmlFor={option.value}>
              <input
                type="radio"
                id={option.value}
                checked={option.value === this.state.movementSelected}
                value={option.value}
                onChange={this.onMovementChange}
              />
              {option.text}
            </label>
          ))}
        </div>
        {/* Choose Task */}
        <div>
          <select
            value={this.state.selectedTaskId}
            onChange={this.onTaskChange}>
            {this.props.tasks.itemsOrder.map(taskId => (
              <option
                value={taskId}
                key={taskId}>
                {this.props.tasks.items[taskId].description}
              </option>
            ))}
            {/* <option value=""></option> */}
          </select>
        </div>
        {/* Choose Resource */}
        <div>
          <select
            value={this.state.selectedResourceId}
            onChange={this.onResourceChange}>
            {this.props.resourcesArray.map(item => {
              return (
                <option
                  value={item.id}
                  key={item.id}>
                  {item.resource.name}
                </option>
              );
            })}
            {/* <option value=""></option> */}
          </select>
        </div>
        {/* Quantity */}
        <div>
          <input
            value={this.state.selectedQuantity}
            onChange={this.onQuantityChange}
            type="number"
            name=""
            id=""  />
        </div>
        {/* onMove */}
        <button
          type="submit"
          onClick={this.onMove}>
          {this.state.movementSelected}
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    tasks: state.tasks,
    resourcesArray: selectors.resourcesByRole(state, state.auth.roleId),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return { onMove: payload => actions.resourcesMove(payload),  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskPanel);
