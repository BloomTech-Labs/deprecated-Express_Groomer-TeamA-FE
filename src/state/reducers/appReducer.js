import {
  POPULATE,
  POPULATE_USER,
  POPULATE_PET,
  CREATE_PET,
} from '../actions/index';

const initialState = {
  profiles: [],
  pets: [],
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
    case POPULATE_PET:
      return {
        ...state,
        pets: action.payload,
      };
    case CREATE_PET:
      return {
        ...state,
        pets: [...state.pets, ...action.payload],
      };
    default:
      return state;
  }
};
