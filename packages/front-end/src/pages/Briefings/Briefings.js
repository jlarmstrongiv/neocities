import React from 'react';
import { connect, } from 'react-redux';
import * as actions from 'store/actions';
import * as selectors from 'store/selectors';
import Briefing from 'pages/Briefings/Briefing';

class Briefings extends React.Component {
  componentDidMount() {
    this.props.onBriefingsInit();
  }
  render() {
    return (
      <div>
        Briefings
        <div>
          {this.props.briefingsOrder.map(briefingId => (
            <Briefing
              key={briefingId}
              briefingId={briefingId} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { briefingsOrder: selectors.briefingsOrderByRole(state), };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return { onBriefingsInit: () => dispatch(actions.briefingsInit()), };
};
export default connect(mapStateToProps, mapDispatchToProps)(Briefings);
