import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLinks } from './navStyles';
import { useHistory } from 'react-router-dom';

export const RightNav = () => {
  //sets state for items in menu, useHistory directs user to selected page
  const [current, setCurrent] = useState({
    current: '/home',
  });

  const history = useHistory();

  const handleClick = e => {
    setCurrent({ current: e.key });
    history.push(e.key);
  };

  return (
    <NavLinks>
      <li>
        <Link to="/groomers">For Groomers</Link>
      </li>
      <li>
        <Link to="/login">Log In</Link>
      </li>
    </NavLinks>
  );
};

export default RightNav;
