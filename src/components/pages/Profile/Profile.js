import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import RenderGroomerProfile from './RenderGroomerProfile';
import RenderCustomerProfile from './RenderCustomerProfile';

import { populateCustomer, populateGroomer } from '../../../state/actions';

import { getUserProfileInfo } from '../../../api';

// import { List } from '../../common';

// import RenderProfileListPage from './RenderProfileListPage';

// Here is an example of using our reusable List component to display some list data to the UI.
const Profile = props => {
  const [isGroomer, setIsGroomer] = useState(null);

  useEffect(() => {
    // Make get request for user profile to api
    const userInfo = getUserProfileInfo(props.match.params.id);
    if (userInfo.user_type === 'groomer') {
      props.populateGroomer(userInfo);
      setIsGroomer(true);
    } else {
      props.populateCustomer(userInfo);
      setIsGroomer(false);
    }
    // check if user is customer or groomer
    // call appropriate action
    // set isGroomer
  }, [props]);

  //email, name, zoneinfo, pet_name, pet_type, pet_pic, pet_bio
  return (
    <div>
      {isGroomer ? (
        <RenderGroomerProfile userInfo={props.groomerInfo} />
      ) : (
        <RenderCustomerProfile userInfo={props.customerInfo} />
      )}
    </div>
    // <List
    //   // Here we are passing our Axios request helper function as a callback.
    //   getItemsData={() => getUserProfileInfo(props.match.params.id)}
    //   // Here we are passing in a component we want to show whilst waiting for our API request
    //   // to complete.
    //   LoadingComponent={() => <div>Loading Profiles...</div>}
    //   // Here we are passing in a component that receives our new data and returns our JSX elements.
    //   RenderItems={isGroomer ? <RenderGroomerProfile userInfo={props.groomerInfo}/> : <RenderCustomerProfile userInfo={props.customerInfo}/>}
    // />
  );
};

const mapStateToProps = state => {
  return {
    customerInfo: state.customerInfo,
    groomerInfo: state.groomerInfo,
  };
};

export default connect(mapStateToProps, { populateCustomer, populateGroomer })(
  Profile
);
