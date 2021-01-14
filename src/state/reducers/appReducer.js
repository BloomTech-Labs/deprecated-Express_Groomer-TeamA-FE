import {
  POPULATE,
  POPULATE_USER,
  POPULATE_PET,
  CREATE_PET,
  EDIT_PET,
  DELETE_PET,
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
    case EDIT_PET:
      return {
        ...state,
        pets: state.pets.map(pet => {
          if (pet.id === action.payload.id) {
            return action.payload;
          } else {
            return pet;
          }
        }),
      };
    case DELETE_PET:
      return {
        ...state,
        pets: state.pets.filter(pet => {
          return pet.id !== action.payload.id;
        }),
      };
    default:
      return state;
  }
};
