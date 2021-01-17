import React, { useEffect, useState, useMemo } from 'react';
import { connect } from 'react-redux';
import { useOktaAuth } from '@okta/okta-react';
import RenderGroomerProfile from './RenderGroomerProfile';
import RenderCustomerProfile from './RenderCustomerProfile';
import {
  getUserProfileData,
  getCustomerPetsData,
  getAppointmentData,
} from '../../../api';

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
      })
      .catch(err => {
        console.log(err);
      });
    if (props.currentUser.user_type === 'Groomer') {
      setIsGroomer(true);
    } else {
      setIsGroomer(false);
      getCustomerPetsData(authState);
      getAppointmentData(authState);
    }
  }, []);

  return (
    <div>
      {isGroomer ? (
        <RenderGroomerProfile userInfo={props.currentUser} />
      ) : (
        <RenderCustomerProfile
          userInfo={props.currentUser}
          pets={props.pets}
          appointments={props.appointments}
        />
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    appointments: state.appointments,
    currentUser: state.currentUser,
    pets: state.pets,
  };
};

export default connect(mapStateToProps, {})(Profile);
