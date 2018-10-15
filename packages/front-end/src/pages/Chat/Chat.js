import React from 'react';
import { connect, } from 'react-redux';
import * as actions from 'store/actions';

class Chat extends React.Component {
  componentDidMount() {
    this.props.onChatInit();
  }
  state = { message: 'testMessage', }
  onMessageChange = event => {
    this.setState({
      ...this.state,
      message: event.target.value,
    });
  }
  onMessageSend = event => {
    const message = this.state.message.trim();
    if (message) {
      // this.props.
    }
  }
  render() {
    return (
      <div>
        Chat
        <div>{JSON.stringify(this.props.chat)}</div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { chat: state.chat, };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return { onChatInit: () => dispatch(actions.chatInit()), };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
