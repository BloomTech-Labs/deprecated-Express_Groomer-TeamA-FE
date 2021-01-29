import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Title } from './navStyles';
import RightNav from './RightNav';

function NavBar() {
  return (
    <Nav>
      <Link to="/home">
        <Title>Pet Express</Title>
      </Link>
      <RightNav />
    </Nav>
  );
}

export default NavBar;
