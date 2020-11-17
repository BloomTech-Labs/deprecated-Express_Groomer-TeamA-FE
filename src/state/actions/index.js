export const POPULATE = 'POPULATE';
export const POPULATE_USER = 'POPULATE_USER';
export const POPULATE_EMAIL = 'POPULATE_EMAIL';

export const setProfilesToState = data => {
  console.log(data);
  return {
    type: POPULATE,
    payload: data,
  };
};
export const populateUser = data => {
  return {
    type: POPULATE_USER,
    payload: data,
  };
};

export const populateEmail = data => {
  return {
    type: POPULATE_EMAIL,
    payload: data,
  };
};
