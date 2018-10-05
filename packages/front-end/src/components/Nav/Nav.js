import React from 'react';
import NavItem from 'components/NavItem/NavItem';

const Nav = () => {
  const pages = [
    {
      path: '/',
      iconPath: 'path/to/icon',
      title: 'Home',
    },
    {
      path: '/dashboard',
      iconPath: 'path/to/icon',
      title: 'Dashboard',
    },
    {
      path: '/chat',
      iconPath: 'path/to/icon',
      title: 'Chat',
    },
    {
      path: '/resources',
      iconPath: 'path/to/icon',
      title: 'Resources',
    },
    {
      path: '/tasks',
      iconPath: 'path/to/icon',
      title: 'Tasks',
    },
    {
      path: '/briefings',
      iconPath: 'path/to/icon',
      title: 'Briefings',
    },
  ];
  return (
    <div>
      NAV
      {pages.map(({ path, iconPath, title, }) => (
        <NavItem
          key={path}
          path={path}
          iconPath={iconPath}
          title={title}
        />
      ))}
    </div>
  );
};

export default Nav;
