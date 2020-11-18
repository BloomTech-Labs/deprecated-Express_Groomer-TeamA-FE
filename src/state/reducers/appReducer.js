import { POPULATE, POPULATE_USER } from '../actions/index';

const initialState = {
  profiles: [],
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
