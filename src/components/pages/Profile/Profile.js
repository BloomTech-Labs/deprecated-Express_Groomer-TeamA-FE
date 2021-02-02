import React, { useEffect, useState, useMemo } from 'react';
import { connect } from 'react-redux';
import { useOktaAuth } from '@okta/okta-react';
import RenderGroomerProfile from './RenderGroomerProfile';
import RenderCustomerProfile from './RenderCustomerProfile';
import { LoadingSpinner } from '../../common';
import {
  getUserProfileData,
  getCustomerPetsData,
  getAppointmentData,
  getBusinessProfileData,
  editBusinessProfileInfoData,
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
        getBusinessProfileData(authState, info.sub);
        getCustomerPetsData(authState);
        getAppointmentData(authState);
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
      {Object.keys(props.currentUser).length ? (
        props.currentUser.user_type === 'Groomer' ? (
          <RenderGroomerProfile userInfo={props.currentUser} />
        ) : (
          <RenderCustomerProfile
            userInfo={props.currentUser}
            pets={props.pets}
            appointments={props.appointments}
          />
        )
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

//checking to see if it lets me push now
// new changes
const mapStateToProps = state => {
  return {
    appointments: state.appointments,
    currentUser: state.currentUser,
    pets: state.pets,
  };
};

export default connect(mapStateToProps, {})(Profile);
