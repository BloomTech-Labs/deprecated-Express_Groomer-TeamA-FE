import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Title } from './navStyles';
import {BurgerMenu} from "./BurgerMenu";

function NavBar() {
  return (
    <Nav>
      <Link to="/home">
        <Title>Pet Express</Title>
      </Link>
      <BurgerMenu />
    </Nav>
  );
}

export default NavBar;
