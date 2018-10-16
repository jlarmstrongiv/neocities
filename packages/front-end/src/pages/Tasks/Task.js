import React from 'react';
import { connect, } from 'react-redux';
import * as selectors from 'store/selectors/task';

class Task extends React.Component {
  render() {
    const task = this.props.task;
    const deployed = this.props.deployed;
    return (
      <div>
        <br />Description: {task.description}
        <br />Details: {task.details}
        <br />Deployed: { deployed }
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // TODO This needs to be abstracted to a selector
  let res = state.res.items
  let deployed = Object.entries(res).map((rsstate) => {
    if(rsstate[1].event.id == ownProps.taskId){
       return(`${rsstate[1].resource.name} : ${rsstate[1]["deployed"]} `)        
    }
  })
  return { task: state.tasks.items[ownProps.taskId], deployed: deployed };

};

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {};
// };

export default connect(mapStateToProps, null)(Task);
