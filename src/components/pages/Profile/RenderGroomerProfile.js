import React from 'react';
import './profile.css';
import { Link } from 'react-router-dom';

const RenderGroomerProfile = ({ userInfo }) => {
  return (
    <div>
      <span className="welcome">
        <Link to="/">Home</Link>
        <p>Welcome, groomer!</p>
      </span>
      {userInfo && (
        <div className="profile-container">
          <h1>{userInfo.name}</h1>
          <h2>{userInfo.email}</h2>
          <img id="profile-img" src={userInfo.avatarUrl} alt="awesome photo" />
        </div>
      )}
    </div>
  );
};

export default RenderGroomerProfile;
