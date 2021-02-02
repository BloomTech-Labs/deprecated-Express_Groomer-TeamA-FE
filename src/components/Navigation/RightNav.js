import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { NavLinks } from './navStyles';

export const RightNav = props => {
  const userType = useSelector(state => state.currentUser.user_type);

  const groomerLinks = () => {
    return (
      <>
        <li>
          <Link to="/" className="nav-links">
            Home
          </Link>
        </li>
        <li>
          <Link to="/myprofile" className="nav-links">
            Profile
          </Link>
        </li>
        <li>
          <Link to="/appointments/scheduled" className="nav-links">
            Appointments
          </Link>
        </li>
      </>
    );
  };

  const customerLinks = () => {
    return (
      <>
        <li>
          <Link to="/" className="nav-links">
            Home
          </Link>
        </li>
        <li>
          <Link to="/myprofile" className="nav-links">
            Profile
          </Link>
        </li>
        <li>
          <Link to="/map-view" className="nav-links">
            Find Groomers
          </Link>
        </li>
      </>
    );
  };

  const defaultLinks = () => {
    return (
      <>
        <li>
          <Link to="/login" className="nav-links">
            Log In
          </Link>
        </li>
        <li>
          <Link to="/groomers" className="nav-links">
            For Groomers
          </Link>
        </li>
        <li>
          <Link to="/profile-list">Profile List</Link>
        </li>
      </>
    );
  };

  const getLinks = userType => {
    if (userType === 'Groomer') {
      return groomerLinks();
    } else if (userType === 'Customer') {
      return customerLinks();
    } else {
      return defaultLinks();
    }
  };

  return <NavLinks open={props.open}>{getLinks(userType)}</NavLinks>;
};

export default RightNav;
