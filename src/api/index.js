import axios from 'axios';
import { setProfilesToState, populateUser } from '../state/actions';
import { store } from '../index';
// we will define a bunch of API calls here.
const apiUrl = `${process.env.REACT_APP_API_URI}/profiles`;

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

const apiAuthGet = authHeader => {
  return axios.get(apiUrl, { headers: authHeader });
};

const apiAuthEdit = (authHeader, data) => {
  return axios.put(apiUrl, data, { headers: authHeader });
};

const apiAuthGetUser = async (authHeader, id) => {
  // const path = `${apiUrl}/${id}`;
  const response = await axios.get(`${apiUrl}/${id}`, { headers: authHeader });
  return response;
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

const editProfileData = (authState, data) => {
  try {
    return apiAuthEdit(getAuthHeader(authState), data).then(response => {
      store.dispatch(populateUser(response.profile));
    });
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
        store.dispatch(populateUser(response));
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
  getAuthHeader,
};
