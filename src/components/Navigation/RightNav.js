import React from 'react';
import { Link } from 'react-router-dom';
import { NavLinks } from './navStyles';

export const RightNav = ({open}) => {
  return (
    <NavLinks open = {open}>
      <li>
        <Link to="/groomers" className="nav-links">
          For Groomers
        </Link>
      </li>
      <li>
        <Link to="/login" className="nav-links">
          Log In
        </Link>
      </li>
    </NavLinks>
  );
};

export default RightNav;
