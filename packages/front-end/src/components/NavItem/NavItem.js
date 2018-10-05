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
        {match ? 'active' : ''}
        <Link to={path}>{title}</Link>
      </div>
    )}
  />
);

export default NavItem;
