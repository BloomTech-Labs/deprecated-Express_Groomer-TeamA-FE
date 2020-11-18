import React from 'react';
import { Link } from 'react-router-dom';
import './profile.css';

const RenderCustomerProfile = ({ userInfo }) => {
  return (
    <div>
      <span className="welcome">
        <Link to="/">Home</Link>
        <p>Welcome, customer!</p>
      </span>
      {userInfo && (
        <div className="profile-container">
          <h1>{userInfo.name}</h1>
          <h2>{userInfo.email}</h2>
          <img id="profile-img" src={userInfo.avatarUrl} alt="image" />
        </div>
      )}
    </div>
  );
};

export default RenderCustomerProfile;
