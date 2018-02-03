import React from 'react';
import { Link } from 'react-router-dom';

const SidebarLink = (location) => ({ to, label }) => {
  return (
    <Link key={to} to={to} className={classes.item(location === to)}>
      { label }
    </Link>
  )
}

export default SidebarLink;

const classes = {
  item: (isActive) => `item ${isActive && 'active'}`,
}
