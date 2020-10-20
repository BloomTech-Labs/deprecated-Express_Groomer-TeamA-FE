export const POPULATE = 'POPULATE';
export const POPULATE_GROOMER = 'POPULATE_GROOMER';
export const POPULATE_CUSTOMER = 'POPULATE_CUSTOMER';

export const setProfilesToState = data => {
  console.log(data);
  return {
    type: POPULATE,
    payload: data,
  };
};
export const populateGroomer = data => {
  return {
    type: POPULATE_GROOMER,
    payload: data,
  };
};
export const populateCustomer = data => {
  return {
    type: POPULATE_CUSTOMER,
    payload: data,
  };
};
