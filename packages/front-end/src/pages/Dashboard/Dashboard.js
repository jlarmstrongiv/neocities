import React from 'react';
import { connect, } from 'react-redux';
import * as actions from 'store/actions';
import RoleResources from 'pages/Resources/RoleResources';
import * as selectors from 'store/selectors';
import * as actionTypes from 'store/actions/actionTypes';
import { VariableSizeList as List, } from 'react-window';
import Briefings from 'pages/Briefings/Briefings';

class Dashboard extends React.Component {

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


   onMessageChange = event => {
     this.setState({
       ...this.state,
       message: event.target.value,
     });
     if (event.key == 'Enter') {
       this.props.chatSend({'message': event.target.value.trim()});
     }
   }

  Row = ({ index, style, }) => (
    <div
      className={index % 2 ? 'ListItemOdd' : 'ListItemEven'}
      style={style}>
      <span>{ this.props.chat.items[this.props.chat.itemsOrder[index]].participant.name }</span>
      <span>: { this.props.chat.items[this.props.chat.itemsOrder[index]].text }</span>
    </div>
  );


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

  componentDidMount() {
    this.props.onChatInit();
    this.props.onResourcesInit();
    this.props.onTasksInit();
    this.props.onBriefingsInit();
    this.props.onRolesInit();
    this.props.onResInit();
    if (!this.state.selectedTaskId && this.props.tasks.itemsOrder[0]) {
      this.setState({ selectedTaskId: this.props.tasks.itemsOrder[0], });
    }
    if (!this.state.selectedResourceId && this.props.resourcesArray[0]) {
      this.setState({ selectedResourceId: this.props.resourcesArray[0].id, });
    }
  }

  onMove = async (event) => {
    console.log('On Move is clicked');
    const resource = {
      movement: this.state.movementSelected,
      quantity: this.state.selectedQuantity,
      resourceId: this.state.selectedResourceId,
      taskId: this.state.selectedTaskId,
    };
    this.props.onMoveResource(resource);
  }

  render() {
    return (
      <div>
        <div className="dashboard">
          <div className="main">
            <div className="dash_resource">
                Resources
              <div>
                {this.props.roles.itemsOrder.map(roleId => (
                  <RoleResources
                    key={roleId}
                    roleId={roleId} />
                ))}
              </div>
              <div className="dash_task">Tasks
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
                      <option key={100} value={''}></option>
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
              </div>
            </div>
          </div>
          <div className="right_sidebar">
            <div className="dash_chat">
              <div>
                Chat
                <List
                  className="ChatBox"
                  height={300}
                  itemCount={this.props.chat.itemsOrder.length}
                  itemSize={() => 20}
                  width={600}
                >
                  {this.Row}
                </List>
                <input id="chatInpt" placeholder={ '@' } onKeyPress={ this.onMessageChange.bind(this) }></input>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Briefings />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { 
    roles: state.roles,
    tasks: state.tasks,
    resourcesArray: selectors.resourcesByRole(state, state.auth.roleId),
    auth: state.auth, 
    chat: state.chat,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChatInit: () => dispatch(actions.chatInit()),
    onResourcesInit: () => dispatch(actions.resourcesInit()),
    onTasksInit: () => dispatch(actions.tasksInit()),
    onBriefingsInit: () => dispatch(actions.briefingsInit()),
    onRolesInit: () => dispatch(actions.rolesInit()),
    onResInit: () => dispatch(actions.resInit()),
    onMoveResource: (payload) => dispatch(actions.resourcesMove(payload)),
    chatSend: (payload) => dispatch(actions.chatSend(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
