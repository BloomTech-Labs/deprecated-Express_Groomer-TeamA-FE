import React, { useEffect, useState, useMemo } from 'react';
import { connect } from 'react-redux';
import { useOktaAuth } from '@okta/okta-react';
import RenderGroomerProfile from './RenderGroomerProfile';
import RenderCustomerProfile from './RenderCustomerProfile';
import { getUserProfileData, getCustomerPetsData } from '../../../api';

const Profile = props => {
  const { authState, authService } = useOktaAuth();
  const [memoAuthService] = useMemo(() => [authService], []);
  const [isGroomer, setIsGroomer] = useState(true);

  useEffect(() => {
    // Check current user type to see if groomer or not
    memoAuthService
      .getUser()
      .then(info => {
        getUserProfileData(authState, info.sub);
        getCustomerPetsData(authState);
      })
      .catch(err => {
        console.log(err);
      });
    if (props.currentUser.user_type === 'Groomer') {
      setIsGroomer(true);
    } else {
      setIsGroomer(false);
    }
  }, []);

  return (
    <div>
      {isGroomer ? (
        <RenderGroomerProfile userInfo={props.currentUser} />
      ) : (
        <RenderCustomerProfile userInfo={props.currentUser} pets={props.pets} />
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    pets: state.pets,
  };
};

export default connect(mapStateToProps, {})(Profile);
