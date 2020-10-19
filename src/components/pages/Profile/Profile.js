import React, { useEffect, useState } from 'react';
import { useOktaAuth } from '@okta/okta-react';

import { getUserProfileInfo } from '../../../api';

// import { List } from '../../common';

// import RenderProfileListPage from './RenderProfileListPage';

// Here is an example of using our reusable List component to display some list data to the UI.
const Profile = props => {
  const { authState, authService } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    // Pull user info from Okta

    if (!authState.isAuthenticated) {
      // When user isn't authenticated, forget any user info
      setUserInfo(null);
    } else {
      authService.getUser().then(info => {
        // setUserInfo(info);
        props.setProfilesToState(info);
      });
      //const info = getUserProfileInfo(props.match.params.id)
      //setUserInfo(info)
    }
  }, [authService, authState]);
  console.log(props.profiles);

  //email, name, zoneinfo, pet_name, pet_type, pet_pic, pet_bio
  return (
    <div>
      {userInfo && (
        <div>
          <h1>{userInfo.name}</h1>
          <h2>{userInfo.preferred_username}</h2>
          <h3>{userInfo.zoneinfo}</h3>
          <p>Boris</p>
          <p>Guinea Pig</p>
          <img
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.petco.com%2Fshop%2Fen%2Fpetcostore%2Fproduct%2Fguinea-pig-5004527--1&psig=AOvVaw0axb1LWhZaGC9d2PD18cXH&ust=1602811053423000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJDVx862tewCFQAAAAAdAAAAABAF"
            alt="guinea pig"
          />
          <p>Fun loving pig</p>
        </div>
      )}
    </div>
    // <List
    //   // Here we are passing our Axios request helper function as a callback.
    //   getItemsData={() => getProfileData(authState)}
    //   // Here we are passing in a component we want to show whilst waiting for our API request
    //   // to complete.
    //   LoadingComponent={() => <div>Loading Profiles...</div>}
    //   // Here we are passing in a component that receives our new data and returns our JSX elements.
    //   RenderItems={RenderProfileListPage}
    // />
  );
};

export default Profile;
