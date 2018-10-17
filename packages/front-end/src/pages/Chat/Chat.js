import React from 'react';
import { connect, } from 'react-redux';
import * as actions from 'store/actions';
import { VariableSizeList as List } from 'react-window';

class Chat extends React.Component {
  componentDidMount() {
    this.props.onChatInit();
    // console.log(this.state)
  }

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

  Row = ({ index, style }) => (
    <div className={index % 2 ? 'ListItemOdd' : 'ListItemEven'} style={style}>
      <span>{ this.props.chat.items[this.props.chat.itemsOrder[index]].participant.name }</span>
      <span>: { this.props.chat.items[this.props.chat.itemsOrder[index]].text }</span>
    </div>
  );

  render() {
    return (
      <div>
          Chat
            <List
              className="ChatBox"
              height={150}
              itemCount={this.props.chat.itemsOrder.length}
              itemSize={() => 20}
              width={300}
            >
              {this.Row}
            </List>
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
