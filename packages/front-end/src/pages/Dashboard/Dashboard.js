import React from 'react';
import { connect, } from 'react-redux';
import * as actions from 'store/actions';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.onChatInit();
    this.props.onResourcesInit();
    this.props.onTasksInit();
    this.props.onBriefingsInit();
  }
  render() {
    return (
      <div>
        Dashboard
      </div>
    );
  }
}

// const mapStateToProps = (state, ownProps) => {
//   return {};
// };

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChatInit: () => dispatch(actions.chatInit()),
    onResourcesInit: () => dispatch(actions.resourcesInit()),
    onTasksInit: () => dispatch(actions.tasksInit()),
    onBriefingsInit: () => dispatch(actions.briefingsInit()),
  };
};

export default connect(null, mapDispatchToProps)(Dashboard);
