import { POPULATE, POPULATE_USER, POPULATE_EMAIL } from '../actions/index';

const initialState = {
  profiles: [],
  currentUserEmail: null,
  currentUser: {},
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case POPULATE:
      return {
        ...state,
        profiles: action.payload,
      };
    case POPULATE_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

   
    default:
      return state;
  }
};
