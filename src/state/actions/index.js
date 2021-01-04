export const POPULATE = 'POPULATE';
export const POPULATE_USER = 'POPULATE_USER';
export const POPULATE_PET = 'POPULATE_PET';

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

export const populatePet = data => {
  return {
    type: POPULATE_PET,
    payload: data,
  };
};
