import React from 'react';
import { Route, } from 'react-router-dom';

const IsActive = ({ render, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      const isActive = props.match ? true : false;
      return (
        <React.Fragment>
          {render({
            isActive,
            IsActive: isActive,
            props,
          })}
        </React.Fragment>
      );
    }}
  />
);


export default IsActive;
