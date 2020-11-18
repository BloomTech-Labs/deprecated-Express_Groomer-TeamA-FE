import React from 'react';
import './profile.css';

const RenderGroomerProfile = ({ userInfo }) => {
  return (
    <div>
      Welcome, groomer!
      {userInfo && (
        <div className="profile-container">
          <h1>{userInfo.name}</h1>
          <h2>{userInfo.email}</h2>
          <img src={userInfo.avatarUrl} alt="image" />
        </div>
      )}
    </div>
  );
};

export default RenderGroomerProfile;
