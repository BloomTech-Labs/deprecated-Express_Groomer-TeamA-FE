import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import RenderGroomerProfile from './RenderGroomerProfile';
import RenderCustomerProfile from './RenderCustomerProfile';

const Profile = props => {
  const [isGroomer, setIsGroomer] = useState(null);

  useEffect(() => {
    // Check current user type to see if groomer or not

    if (props.currentUser.user_type === 'groomer') {
      setIsGroomer(true);
    } else {
      setIsGroomer(false);
    }
  }, [props]);

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

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps, {})(Profile);
