import React from 'react';
import { Link } from 'react-router-dom';
import { BurgerMenu } from './BurgerMenu';
import { Nav, Title } from './navStyles';

function NavBar() {
  return (
    <Nav>
      <Link to="/home">
        <Title>Express Groomer</Title>
      </Link>
      <BurgerMenu />
    </Nav>
  );
}

export default NavBar;
