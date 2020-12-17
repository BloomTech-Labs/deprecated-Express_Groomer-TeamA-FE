import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Menu } from 'antd';
import './navbar.scss';

function NavBar() {
  //sets state for items in menu, useHistory directs user to selected page
  const [current, setCurrent] = useState({
    current: '/home',
  });

  const history = useHistory();

  const handleClick = e => {
    console.log('Click!');
    setCurrent({ current: e.key });
    history.push(e.key);
  };

  return (
    <div className="nav-container">
      <div className="title">
        <Link to="/home">
          <h1>Express Groomer</h1>
        </Link>
      </div>

      <Menu
        onClick={handleClick}
        selectedKeys={[current]}
        className="ant-menu"
        mode="horizontal"
      >
        <Menu.Item key="/groomers">For Groomers</Menu.Item>
        <Menu.Item key="/login">Log In</Menu.Item>
      </Menu>
    </div>
  );
}

export default NavBar;
