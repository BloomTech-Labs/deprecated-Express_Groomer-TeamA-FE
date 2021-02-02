import React from 'react';
import './profile.css';
import GroomerProfilePage from '../GroomerProfile/GroomerProfilePage';

const RenderGroomerProfile = ({ userInfo, businessProfile }) => {
  return (
    <GroomerProfilePage userInfo={userInfo} businessProfile={businessProfile} />
  );
};

export default RenderGroomerProfile;
