import React from 'react';
import { connect, } from 'react-redux';
import * as actions from 'store/actions';
import 'react-virtualized/styles.css'

import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer'
import List from 'react-virtualized/dist/commonjs/List'

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

  rowRenderer = (
    key,         // Unique key within array of rows
    index,       // Index of row within collection
    isScrolling, // The List is currently being scrolled
    isVisible,   // This row is visible within the List (eg it is not an overscanned row)
    style        // Style object to be applied to row (to position it)
    )  => {
    return (
      <div
        key={key}
        style={style}
      >
        {this.props.chat[index]}
      </div>
    )
  }

  render() {
    return (
      <div>
          Chat
          {/* <AutoSizer disableHeight>
            <List
              width={300}
              height={300}
              rowCount={this.props.chat.length}
              rowHeight={20}
              rowRenderer={this.rowRenderer}
            />
          </AutoSizer> */}
        <div>{JSON.stringify(this.props.chat)}</div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state.chat)
  return { chat: state.chat, };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return { onChatInit: () => dispatch(actions.chatInit()), };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
