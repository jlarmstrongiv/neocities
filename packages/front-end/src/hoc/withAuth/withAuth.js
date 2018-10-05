/*
To be all end all, you should avoid wrapping components if you can
Which means it looks like you will try to go the route of exporting the pure component
AKA leaving the Loadable and wrapper Router for that seperate file (asyncComponent/asyncComponentwithRouter) or inport or function or something
*/
// if you were doing this for realzies, you would probably make a withRouterAuth component
import React from 'react';
import hoistStatics from 'hoist-non-react-statics';
import { Redirect, } from 'react-router-dom';
// withRouter https://github.com/ReactTraining/react-router/blob/master/packages/react-router/modules/withRouter.js
// https://reactjs.org/docs/higher-order-components.html
// forward refs https://reactjs.org/docs/forwarding-refs.html
// though react router does not care about the ref forwarding
const withAuth = Component => {
  const C = props => {
    const { wrappedComponentRef, ...remainingProps } = props;
    if (remainingProps.auth) return (
      <Component
        {...remainingProps}
        ref={wrappedComponentRef} />
    );
    return (
      <Redirect to="/" />
    );
    // return (
    //   <Route
    //     children={routeComponentProps => (
    //       <Component
    //         {...remainingProps}
    //         {...routeComponentProps}
    //         ref={wrappedComponentRef}
    //       />
    //     )}
    //   />
    // );
  };

  C.displayName = `withAuth(${Component.displayName || Component.name})`;
  C.WrappedComponent = Component;
  // C.propTypes = { wrappedComponentRef: PropTypes.func, };

  return hoistStatics(C, Component);

};
export default withAuth;
