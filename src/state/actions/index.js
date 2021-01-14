export const POPULATE = 'POPULATE';
export const POPULATE_USER = 'POPULATE_USER';
export const POPULATE_PET = 'POPULATE_PET';
export const CREATE_PET = 'CREATE_PET';
export const EDIT_PET = 'EDIT_PET';

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

export const createPet = data => {
  return {
    type: CREATE_PET,
    payload: data,
  };
};

export const editPet = data => {
  return {
    type: EDIT_PET,
    payload: data,
  };
};
