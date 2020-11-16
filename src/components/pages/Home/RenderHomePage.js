import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../common';
import logo from '../../../assets/9f5a8b6a-18d6-4a28-9e98-1eee8c05b05a_200x200.png';
import './homepage.scss';

function RenderHomePage(props) {
  const { userInfo, authService } = props;
  return (
    <div className="home-container">
      <img src={logo} alt="dog and cat together" />
      <h1 className="home-header">Hi {userInfo.name} Welcome to Pet-XPress!</h1>
      <div className="home-middle">
        <p>
          Pet-Xpress gives customers a way to link with groomers in their area!
          Get started Below
        </p>
        <p>
          <Link to="/profile-list">
            <i className="fas fa-user-circle">Profiles</i>
          </Link>
        </p>
        <p>
          <Link to="/example-list">Example List of Items</Link>
        </p>
        <p>
          <Link to="/datavis">Data Visualizations Example</Link>
        </p>
        <p>
          <Link to="/myprofile">My Profile</Link>
        </p>
        <p>
          <Link to="/editprofile">Edit Profile</Link>
        </p>
        <p>
          <Button
            handleClick={() => authService.logout()}
            buttonText="Logout"
          />
        </p>
      </div>
    </div>
  );
}
export default RenderHomePage;
