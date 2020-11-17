import React from 'react';

const RenderCustomerProfile = ({ userInfo }) => {
  return (
    <div>
      Welcome, customer!
      {userInfo && (
        <div>
          <h1>{userInfo.name}</h1>
          <h2>{userInfo.email}</h2>
          <img src={userInfo.avatarUrl} alt="image" />
        </div>
      )}
    </div>
  );
};

export default RenderCustomerProfile;
