import React, { useEffect, useState, useMemo } from 'react';
import { connect } from 'react-redux';
import { useOktaAuth } from '@okta/okta-react';
import RenderEditGroomerProfile from './RenderEditGroomerProfile';
import RenderEditCustomerProfile from './RenderEditCustomerProfile';
import { getUserProfileData } from '../../../api';

const EditProfile = props => {
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
    }
  }, []);

  return (
    <div>
      {isGroomer ? (
        <RenderEditGroomerProfile
          history={props.history}
          userInfo={props.currentUser}
        />
      ) : (
        <RenderEditCustomerProfile
          history={props.history}
          userInfo={props.currentUser}
        />
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps, {})(EditProfile);
