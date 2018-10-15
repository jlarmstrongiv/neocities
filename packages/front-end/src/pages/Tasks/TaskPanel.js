import React from 'react';
import { connect, } from 'react-reduxs';

class TaskPanel extends React.Component {
  state = {}
  render() {
    return (
      <div>

      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {};
};
const mapDispatchToProps = (state, ownProps) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(TaskPanel);
