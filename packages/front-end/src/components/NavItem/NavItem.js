import React from 'react';
import {
  Route,
  Link,
} from 'react-router-dom';
const NavItem = ({ path, exact, iconpath, title, }) => (
  <Route
    path={path}
    exact={exact}
    children={({ match, }) => (
      <div>
        
        <h4><Link className = {`${match ? 'active' : ''} nav-link`} to={path}>{title}</Link></h4>
      </div>
    )}
  />
);

export default NavItem;
