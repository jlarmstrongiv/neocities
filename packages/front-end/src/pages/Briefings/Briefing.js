import React from 'react';
import { connect, } from 'react-redux';

class Briefing extends React.Component {
  render() {
    const briefing = this.props.briefing;
    return (
      <div>
        {briefing.details}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { briefing: state.briefings.items[ownProps.briefingId], };
};

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {};
// };

export default connect(mapStateToProps, null)(Briefing);
