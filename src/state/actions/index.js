export const POPULATE = 'POPULATE';

export const setProfilesToState = data => {
  console.log(data);
  return {
    type: POPULATE,
    payload: data,
  };
};
