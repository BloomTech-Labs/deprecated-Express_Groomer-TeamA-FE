import React from 'react';
import './profile.css';
import { Link } from 'react-router-dom';
import { GroomerProfilePage } from '../GroomerProfile/GroomerProfilePage';

const RenderGroomerProfile = ({ userInfo }) => {
  return <GroomerProfilePage userInfo={userInfo} />;
};

export default RenderGroomerProfile;
