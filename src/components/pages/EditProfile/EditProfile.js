import React, { useEffect, useState, useMemo } from 'react';
import { connect } from 'react-redux';
import { useOktaAuth } from '@okta/okta-react';
import RenderEditGroomerProfile from './RenderEditGroomerProfile';
import { getUserProfileData, getBusinessProfileData } from '../../../api';

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
        getBusinessProfileData(authState, info.sub);
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
        <>
          <RenderEditGroomerProfile
            history={props.history}
            userInfo={props.currentUser}
            profile={props.businessProfile}
          />
        </>
      ) : (
        <>Loading...</>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    businessProfile: state.businessProfile,
  };
};

export default connect(mapStateToProps, {})(EditProfile);
