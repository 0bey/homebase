import React from 'react';
import { Link } from 'react-router-dom';
import { map } from 'lodash';

const config = {
  emblem: {
    to: "/",
    label: "mf",
  },
  news: {
    to: "/news",
    label: "news",
  },
}

const Sidebar = (props) => {
  const { location: { pathname } } = props;

  return (
    <div className="sidebar">
      { map(config, ({to, label}) => (
          <Link to={to} className={classes.item(pathname === to)}>
            { label }
          </Link>
      ))}
    </div>
  )
}

export default Sidebar;

const classes = {
  item: (isActive) => `item ${isActive && 'active'}`,
}
