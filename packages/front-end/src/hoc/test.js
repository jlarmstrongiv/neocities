import React from 'react';
import {
  compose,
  connect,
} from 'react-redux';
import { withRouter, } from 'react-router-dom';
// class AuthState extends React.Component {
//   render() {
//     return (
//       <React.Fragment>

//       </React.Fragment>
//     );
//   }
// }
// const authState = () => (
//   <React.Fragment>
//     {React.Children.only(this.props.children)()}
//   </React.Fragment>
// )

const IsAuth = ({ component: Component, token, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (!token) return (
        <Component {...props} />
      );
      return (
        <Component
          {...props}
          token={token}
        />
      );
    }}
  />
);

const mapStateToProps = (state, ownProps) => {
  return { token: state.auth.token, };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

export default compose(
  withRouter,
  connect(mapStateToProps, null)
)(IsAuth);
