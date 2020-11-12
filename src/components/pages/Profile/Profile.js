import React, { useEffect, useState, useMemo } from 'react';

import { useOktaAuth } from '@okta/okta-react';

import RenderGroomerProfile from './RenderGroomerProfile';
import RenderCustomerProfile from './RenderCustomerProfile';

import { getUserProfileData } from '../../../api';

const Profile = props => {
  const { authState, authService } = useOktaAuth();
  const [memoAuthService] = useMemo(() => [authService], []);
  const [isGroomer, setIsGroomer] = useState(true);

  useEffect(() => {
    // Check current user type to see if groomer or not
    memoAuthService
      .getUser()
      .then(info => {
        // if user is authenticated we can use the authService to snag some user info.
        // isSubscribed is a boolean toggle that we're using to clean up our useEffect.
        getUserProfileData(authState, info.sub)
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.log(`Error: ${error}`);
          });
      })
      .catch(err => {
        console.log(err);
      });

    // if (props.currentUser.user_type === 'groomer') {
    //   setIsGroomer(true);
    // } else {
    //   setIsGroomer(false);
    // }
  }, []);

  // console.log(res)
  // console.log(err)
  return (
    <div>
      {isGroomer ? (
        <RenderGroomerProfile userInfo={props.groomerInfo} />
      ) : (
        <RenderCustomerProfile userInfo={props.customerInfo} />
      )}
    </div>
  );
};

export default Profile;
