import React from 'react';
import { connect, } from 'react-redux';
import * as actions from 'store/actions';

class Briefings extends React.Component {
  componentDidMount() {
    this.props.onBriefingsInit();
  }
  render() {
    return (
      <div>
        Briefings
        {JSON.stringify(this.props.briefings)}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { briefings: state.briefings, };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return { onBriefingsInit: () => dispatch(actions.briefingsInit()), };
};
export default connect(mapStateToProps, mapDispatchToProps)(Briefings);
