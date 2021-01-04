import axios from 'axios';
import {
  setProfilesToState,
  populateUser,
  populatePet,
} from '../state/actions';
import { store } from '../index';

// we will define a bunch of API calls here.
const apiUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8000'
    : `${process.env.REACT_APP_API_URI}`;

const sleep = time =>
  new Promise(resolve => {
    setTimeout(resolve, time);
  });

const getExampleData = () => {
  return axios
    .get(`https://jsonplaceholder.typicode.com/photos?albumId=1`)
    .then(response => response.data);
};

const getAuthHeader = authState => {
  if (!authState.isAuthenticated) {
    throw new Error('Not authenticated');
  }
  return { Authorization: `Bearer ${authState.idToken}` };
};

const getDSData = (url, authState) => {
  // here's another way you can compose together your API calls.
  // Note the use of GetAuthHeader here is a little different than in the getProfileData call.
  const headers = getAuthHeader(authState);
  if (!url) {
    throw new Error('No URL provided');
  }
  return axios
    .get(url, { headers })
    .then(res => JSON.parse(res.data))
    .catch(err => err);
};

// get user profile
const apiAuthGet = authHeader => {
  return axios.get(`${apiUrl}/profiles`, { headers: authHeader });
};

// edit user profile
const apiAuthEdit = (authHeader, data) => {
  return axios.put(`${apiUrl}/profiles`, data, { headers: authHeader });
};

// get specific profile
const apiAuthGetUser = async (authHeader, id) => {
  // const path = `${apiUrl}/${id}`;
  const response = await axios.get(`${apiUrl}/profiles/${id}`, {
    headers: authHeader,
  });
  return response;
};

// get customer pets
const apiAuthCustomerPets = authHeader => {
  return axios.get(`${apiUrl}/customerPet`, { headers: authHeader });
};

const getProfileData = authState => {
  try {
    return apiAuthGet(getAuthHeader(authState)).then(response => {
      store.dispatch(setProfilesToState(response.data));
      return response.data;
    });
  } catch (error) {
    return new Promise(() => {
      console.log(error);
      return [];
    });
  }
};

const editProfileData = (authState, profile_data) => {
  try {
    return apiAuthEdit(getAuthHeader(authState), profile_data).then(
      response => {
        store.dispatch(populateUser(response.data.profile));
      }
    );
  } catch (error) {
    return new Promise(() => {
      console.log(error);
      return [];
    });
  }
};

const getUserProfileData = (authState, id) => {
  const header = getAuthHeader(authState);

  try {
    return apiAuthGetUser(header, id)
      .then(response => {
        store.dispatch(populateUser(response.data));
        return response.data;
      })
      .catch(err => {
        console.log(err);
      });
  } catch (error) {
    return new Promise(() => {
      console.log(`Error: ${error}`);
      return [];
    });
  }
};

const getCustomerPetsData = authState => {
  const header = getAuthHeader(authState);

  try {
    return apiAuthCustomerPets(header)
      .then(response => {
        if (Array.isArray(response.data.pets)) {
          store.dispatch(populatePet(response.data.pets));
        } else {
          store.dispatch(populatePet([]));
        }
        return response.data;
      })
      .catch(err => {
        console.log(err);
      });
  } catch (error) {
    return new Promise(() => {
      console.log(`Error: ${error}`);
      return [];
    });
  }
};

export {
  sleep,
  getExampleData,
  getProfileData,
  getDSData,
  editProfileData,
  getUserProfileData,
  getCustomerPetsData,
  getAuthHeader,
};
